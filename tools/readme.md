# tool collection


## prepare initial content setup

### convert wordpress export.xml to json/markdown

use
https://github.com/s-light/wordpress-export-to-markdown/tree/MYS

with this commandline:
```bash
npx wordpress-export-to-markdown \
--wizard false \
--frontmatter-fields "title,date,categories,tags,coverImage,draft,meta.material_number:material_number,meta.material_type:material_type,meta.material_short_description:material_short_description"
```

the relevant changes: add these fields to the frontmatter-fields part:
- `meta.material_number:material_number`
- `meta.material_type:material_type`
- `meta.material_short_description:material_short_description`

this way you end up with an directory `output`.
containing a `posts.json` file and a subfolder `custom/cpt_material/` with than one folder per part - also containing all images.


### convert posts.json to reposData.json

start up mks-welcome app
```bash
/mks-welcome (main *)$ quasar dev
```
navigate to
https://localhost:9000/mks-welcome/tools/convert-posts-to-reposData


### use `setup_github_repos`

```bash
/mks-welcome (main *)$ node ./tools/setup_github_repos/index.mjs
```
