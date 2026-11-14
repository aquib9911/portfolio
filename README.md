# Aquib · Portfolio

Live at **https://aquib9911.github.io/portfolio/**. Everything on the site can be changed from GitHub in the browser. No code, no software.

## The files

| File or folder | What it is |
|---|---|
| `content.js` | **All the words, links and picture paths.** This is the file you edit. |
| `work/` | Pictures for the Selected work projects |
| `icons/` | Tool icons for the Direction board |
| `resume.pdf` | Optional. Your resume, if you'd rather host it here than on Google Drive |
| `index.html` | The design. You don't need to touch it. |

After every change, the live site updates in 1 to 2 minutes. If you don't see it, refresh with **Ctrl + Shift + R** (Windows) or **Cmd + Shift + R** (Mac).

---

## Change text or links

1. Open `content.js` on GitHub and click the **pencil icon** (Edit).
2. Change the words inside the "double quotes".
3. Click **Commit changes**.

Keep the quotes and the commas at the end of lines exactly as they are. To add something to a list (a skill, a job, a project point), copy a whole line, paste it below, and change the words.

---

## Add or change a picture in Selected work

**1. Upload the picture**

1. Open the `work` folder in the repo.
2. Click **Add file → Upload files**.
3. Drag the picture in and click **Commit changes**.

Name pictures in lowercase with no spaces, for example `gfps-cover.jpg`. JPG, PNG or WebP all work. Keep each picture under about 1 MB so the site stays fast.

**2. Point the project at it**

Open `content.js`, find the project, and fill in `cover` and `gallery`:

```js
cover: "work/gfps-cover.jpg",
gallery: ["work/gfps-stage.jpg", "work/gfps-booth.jpg", "work/gfps-wall.jpg"]
```

- **cover** shows on the work card and at the top of the project page.
- **gallery** shows inside the project page, in the order you list them. Wide pictures automatically take the full width.

**Shortcut, no editing needed:** leave `cover: ""` and `gallery: []` empty and just name the files after the project's `key`:

- `work/gfps.jpg` becomes the cover
- `work/gfps-2.jpg`, `work/gfps-3.jpg` … become the gallery (up to 12)

To **replace** a picture, upload a new file with the **same name**. GitHub replaces the old one.

To **delete** a picture, open it in the `work` folder, click the **⋯** menu, then **Delete file**.

---

## Add a new project

In `content.js`, copy one whole project block (from `{` to `},`), paste it where you want it in the list, and change:

- `key`: a short unique name, lowercase, no spaces (for example `"diwali-campaign"`)
- `size`: `"big"`, `"half"` or `"normal"`
- `filter`: `"identity"`, `"space"`, `"motion"`, `"print"` or `"digital"`
- `cover` and `gallery`: your pictures

New projects need a cover picture. The animated covers only exist for the original nine.

To remove a project, delete its whole block, including the comma after it.

---

## Social media and Motion rows

These sit under the project cards in Selected work, 4 tiles each. Upload the files to the `work` folder with these names:

- Social media posts: `social-1.jpg` to `social-4.jpg` (portrait 4:5 looks best)
- Motion pieces: `motion-1.mp4` to `motion-4.mp4` (9:16 reels, under about 20 MB each)

That's it. A tile appears as soon as its file is uploaded, and a row stays hidden until it has at least one file. To add a caption or link a tile to the real post, fill in `title` or `link` in the `social` and `motion` lists in `content.js`.

---

## Tool icons on the Direction board

Upload the icon files to the `icons` folder with these names:

`photoshop.png`, `illustrator.png`, `premiere-pro.png`, `lightroom.png`, `acrobat.png`, `after-effects.png`, `indesign.png`

PNG or SVG both work. To add another tool, copy a line in the `apps` list in `content.js` and point `icon` at the new file.

---

## Resume

The orange button opens the link in `resume:` in `content.js`. Right now that is a Google Drive link: the button opens the Drive viewer in a new tab (works on phones too) and people can download from there. Keep the file's sharing on "Anyone with the link".

To host the PDF here instead, upload it as `resume.pdf` next to `index.html` and set `resume: ""` in `content.js`. The button then downloads it straight away.

---

## If the site looks blank after an edit

A missing quote or comma in `content.js` stops the site from loading. Open the file, click **History**, and compare with the last version that worked, or click the earlier version and copy it back.
