// import { ref} from 'vue'
import { defineStore, acceptHMRUpdate } from 'pinia'

// import {mksAbbrLoad} from '../content_md/mksAbbr.js'
import mksContent from '../content_md/mksContent.js'
// import mksAbbr from '../content_md/mksAbbr.js'
import about from '../content_md/about.js'
// import demo from '../content_md/demo.js'
// console.log('mksContent', mksContent)

const sort_materialtype = (entries) => {
    // material_type
    // - controller
    // - input
    // - output
    // console.log('entries', entries)
    let materialtype_controller = entries.filter(
        ([, obj]) => obj.meta.material_type == 'controller',
    )
    let materialtype_input = entries.filter(([, obj]) => obj.meta.material_type == 'input')
    let materialtype_output = entries.filter(([, obj]) => obj.meta.material_type == 'output')
    let materialtype_rest = entries.filter(
        ([, obj]) => !['controller', 'input', 'output'].includes(obj.meta.material_type),
    )

    const sort_local = ([key1], [key2]) => {
        return key1.localeCompare(key2)
    }

    materialtype_controller.sort(sort_local)
    materialtype_input.sort(sort_local)
    materialtype_output.sort(sort_local)
    materialtype_rest.sort(sort_local)

    // console.log('materialtype_controller', materialtype_controller)
    // console.log('materialtype_input', materialtype_input)
    // console.log('materialtype_output', materialtype_output)
    // console.log('materialtype_rest', materialtype_rest)
    const result = [
        ...materialtype_controller,
        ...materialtype_input,
        ...materialtype_output,
        ...materialtype_rest,
    ]
    return result
}

const sort_difficulty = (entries) => {
    // difficulty
    // - recommend
    // - advanced
    // - expert
    // console.log('entries', entries)
    let difficulty_recommend = entries.filter(([, obj]) => obj.meta.difficulty == 'recommend')
    let difficulty_advanced = entries.filter(([, obj]) => obj.meta.difficulty == 'advanced')
    let difficulty_expert = entries.filter(([, obj]) => obj.meta.difficulty == 'expert')
    let difficulty_rest = entries.filter(
        ([, obj]) => !['recommend', 'advanced', 'expert'].includes(obj.meta.difficulty),
    )

    // const sort_local = ([key1], [key2]) => {
    //     return key1.localeCompare(key2)
    // }

    // difficulty_recommend.sort(sort_local)
    // difficulty_advanced.sort(sort_local)
    // difficulty_expert.sort(sort_local)
    // difficulty_rest.sort(sort_local)

    difficulty_recommend = sort_materialtype(difficulty_recommend)
    difficulty_advanced = sort_materialtype(difficulty_advanced)
    difficulty_expert = sort_materialtype(difficulty_expert)
    difficulty_rest = sort_materialtype(difficulty_rest)

    // console.log('difficulty_recommend', difficulty_recommend)
    // console.log('difficulty_advanced', difficulty_advanced)
    // console.log('difficulty_expert', difficulty_expert)
    // console.log('difficulty_rest', difficulty_rest)
    const result = [
        ...difficulty_recommend,
        ...difficulty_advanced,
        ...difficulty_expert,
        ...difficulty_rest,
    ]
    return result
}

const mks_items_sorted_recommend = (entries, hide_EOL = false) => {
    // sort:
    // status
    // - active
    // - deprecated
    // - EOL
    // every status group should be sorted by difficulty.
    // difficulty
    // - recommend
    // - advanced
    // - expert
    // console.group('mks_items_sorted')
    // console.log('entries', entries)
    let status_active = entries.filter(([, obj]) => obj.meta.status == 'active')
    let status_deprecated = entries.filter(([, obj]) => obj.meta.status == 'deprecated')
    let status_EOL = entries.filter(([, obj]) => obj.meta.status == 'EOL')
    let status_rest = entries.filter(
        ([, obj]) => !['active', 'deprecated', 'EOL'].includes(obj.meta.status),
    )

    // for every group we sort it again with the difficulty:
    status_active = sort_difficulty(status_active)
    status_deprecated = sort_difficulty(status_deprecated)
    status_EOL = sort_difficulty(status_EOL)
    status_rest = sort_difficulty(status_rest)

    // console.log('status_active', status_active)
    // console.log('status_deprecated', status_deprecated)
    // console.log('status_EOL', status_EOL)
    // console.log('status_rest', status_rest)

    const sortedEntries = [
        ...status_active,
        ...status_deprecated,
        ...status_rest,
        ...(hide_EOL ? [] : status_EOL),
    ]
    // console.log('sortedEntries', sortedEntries)
    // console.groupEnd()
    return sortedEntries
}

const mks_items_sorted_material_number = (entries, hide_EOL = true) => {
    // console.group('mks_items_sorted_material_number')
    // console.log('entries', entries)
    if (hide_EOL) {
        entries = entries.filter(([, obj]) => obj.meta.status !== 'EOL')
    }

    // const sort_material_number = ([key1, item1], [key2, item2]) => {
    const sort_material_number = ([, item1], [, item2]) => {
        // return key1.localeCompare(key2)
        return item1.meta.material_number - item2.meta.material_number
    }

    entries.sort(sort_material_number)

    return entries
}

const mks_items_sorted = (mks_parts_raw, settings = {}) => {
    const entries = Object.entries(mks_parts_raw)

    let sortedEntries = []
    if (settings.sorting == 'recommend') {
        sortedEntries = mks_items_sorted_recommend(entries, settings.hide_EOL)
    } else {
        sortedEntries = mks_items_sorted_material_number(entries, settings.hide_EOL)
    }

    // console.log('sortedEntries', sortedEntries)
    const sortedEntriesObj = Object.fromEntries(sortedEntries)
    // console.log('sortedEntriesObj', sortedEntriesObj)
    // console.groupEnd()
    return sortedEntriesObj
    // return sortedEntries
}

const includesText = (a, b, caseSensitive = false) => {
    if (caseSensitive == false) {
        a = a?.toLowerCase()
        b = b?.toLowerCase()
    }
    return a?.includes(b)
}

const filter_with_text = (
    item,
    item_name,
    searchText,
    searchInContent = false,
    searchCaseSensitive = false,
) => {
    // TODO: find a better way to search for text in rendered output..
    // readme.content.toLowerCase().includes(searchText.value.toLowerCase()) ||
    return (
        includesText(item_name, searchText, searchCaseSensitive) ||
        includesText(item.excerpt, searchText, searchCaseSensitive) ||
        includesText(item.meta.material_short_descr, searchText, searchCaseSensitive) ||
        includesText(item.meta.title, searchText, searchCaseSensitive) ||
        includesText(item.meta.tags?.join(', '), searchText, searchCaseSensitive) ||
        includesText(item.data?.tags?.join(', '), searchText, searchCaseSensitive) ||
        (searchInContent ? includesText(item.content_text, searchText, searchCaseSensitive) : false)
    )
}

const filterObjItemsWithSearchText = (obj, searchText, searchInContent) => {
    const result = {}
    for (const [item_name, item] of Object.entries(obj)) {
        // console.log(`item_name`, item_name, `item`, item)
        if (filter_with_text(item, item_name, searchText, searchInContent)) {
            result[item_name] = item
        }
    }
    return result
}

const filterByMaterialType = (obj, by_material_type) => {
    // console.log(`obj`, obj)
    // console.log(`by_material_type`, by_material_type)
    if (by_material_type && by_material_type != '') {
        // console.log('filter!')
        const result = {}
        for (const [item_name, item] of Object.entries(obj)) {
            // console.log(`item_name`, item_name, `item`, item)
            // console.log(`item.meta.material_type`, item.meta.material_type)
            if (item.meta.material_type == by_material_type) {
                result[item_name] = item
            }
        }
        return result
    } else {
        // console.log('skip')
        return obj
    }
}

export const useMDContentStore = defineStore('MDContent', {
    state: () => ({
        mks: {
            welcome: mksContent.welcome,
            parts: mksContent.parts,
            // parts_sorted: mks_items_sorted(mksContent.parts, {
            //     hide_EOL: this.settings.hide_EOL,
            //     sorting: this.settings.sorting,
            // }),
            tags: mksContent.tags,
            // abbr: mksAbbr,
        },
        settings: {
            sorting: 'material_number',
            hide_EOL: true,
            search_in_content: false,
        },
        about: about,
        // demo: demo,
        // abbr: {abbr:mksAbbrLoad()},
    }),
    getters: {
        // parts_sorted: (state) => mks_items_sorted(state.parts),
        // parts_filtered_by_material_type: (state) => {
        //     // https://pinia.vuejs.org/core-concepts/getters.html#Passing-arguments-to-getters
        //     return (userId) => this.parts_sorted.find((part) => user.id === userId)
        //     mks_items_sorted(state.parts)
        // },
        parts_filtered: (state) => {
            // https://pinia.vuejs.org/core-concepts/getters.html#Passing-arguments-to-getters
            return (filterObj) => {
                return filterByMaterialType(
                    filterObjItemsWithSearchText(
                        // state.mks.parts_sorted,
                        mks_items_sorted(state.mks.parts, {
                            hide_EOL: state.settings.hide_EOL,
                            sorting: state.settings.sorting,
                        }),
                        filterObj.by_searchText ? filterObj.by_searchText : '',
                        state.settings.search_in_content,
                    ),
                    filterObj.by_material_type,
                )
            }
        },
    },
    actions: {},
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useMDContentStore, import.meta.hot))
}
