# bulk-edit

```bash

git submodule foreach "(git restore .)&"


git submodule foreach "(git add .; git commit -a -m 'bulk-update update examples')&"

git submodule foreach "(git push)&"

```
