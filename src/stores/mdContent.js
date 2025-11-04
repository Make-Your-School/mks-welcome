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

const mks_items_sorted = (mks_parts_raw) => {
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
    // console.log('mks_parts_raw', mks_parts_raw)
    const entries = Object.entries(mks_parts_raw)
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
        ...status_EOL,
        // ...mks_parts.value,
        // ...entries,
    ]
    // console.log('sortedEntries', sortedEntries)
    const sortedEntriesObj = Object.fromEntries(sortedEntries)
    // console.log('sortedEntriesObj', sortedEntriesObj)
    // console.groupEnd()
    return sortedEntriesObj
    // return sortedEntries
}

const filter_with_text = (item, item_name, searchText, searchInContent = false) => {
    // TODO: find a better way to search for text in rendered output..
    // readme.content.toLowerCase().includes(searchText.value.toLowerCase()) ||
    return (
        item_name?.toLowerCase().includes(searchText.toLowerCase()) ||
        (searchInContent
            ? item.content_text.toLowerCase().includes(searchText.toLowerCase())
            : false) ||
        item.excerpt.toLowerCase().includes(searchText.toLowerCase()) ||
        item.meta.tags?.join(', ').toLowerCase().includes(searchText.toLowerCase()) ||
        item.meta.material_short_descr?.toLowerCase().includes(searchText.toLowerCase()) ||
        item.data?.tags?.join(', ').toLowerCase().includes(searchText.toLowerCase())
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
            parts_sorted: mks_items_sorted(mksContent.parts),
            tags: mksContent.tags,
            // abbr: mksAbbr,
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
                        state.mks.parts_sorted,
                        filterObj.by_searchText ? filterObj.by_searchText : '',
                        filterObj.in_content ? filterObj.in_content : false,
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
