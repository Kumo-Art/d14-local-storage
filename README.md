# Saved Profile Notes


## localStorage
- setItem(key, value) saves. The key is a name we pick.
- getItem(key) reads it back.
- Same key, spelled the same way, every time.




## Objects in localStorage
- localStorage holds STRINGS ONLY.
- Handing it an object stores the text [object Object]. My data is gone.
- JSON.stringify(object) on the way in.
- JSON.parse(string) on the way out.
- removeItem(key) deletes that key: value pair.
- Deleting from localStorage does not clear the screen. THAT IS MY JOB


## Modules
- type="module" is waht makes import and export legal in a JS file.
- export { name } at the bottom of file lists what the file hands out.
- import { name } from "./filename.js"; at the top of the file, pulls data from file  specified (must have export in file pulling from)