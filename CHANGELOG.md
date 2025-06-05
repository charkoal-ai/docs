# Change Log

All notable changes to the "Charkoal" extension will be documented in this file.

Check [Keep a Changelog](http://keepachangelog.com/) for recommendations on how to structure this file.

## [1.0.2] - 2025-06-05

- fix(theme): setup vscodedark theme properly

## [1.0.1] - 2025-06-05

- fix(ai): generated canvas should be selected in the middle
- fix(ai): generated nodes/edges should have uniq ids
- fix(ai): edges between containers && edge between far components

## [1.0.0] - 2025-06-04

- feat: ai (beta)
- feat(whiteboard): new whiteboard command (have a canvas without having to save it in workspace)
- feat: new ui colors
- feat: add context menu (right click on canvas)
- feat: node layout arrangements
- feat: copy/paste images
- feat: link preview (hover on link will give file preview)
- feat: add fix position menu for edge (will find the closest path and update it)
- feat: edge color
- chore: improve menus ui/ux
- chore: improve screenshot resolutions
- chore: improve bezier curves
- chore: improve nested canvas placeholder trigger
- fix: fullscreen animation can no longer freeze
- fix: edit edge/node can no longer trigger nested canvas shortcuts
- fix: encapsulate nested-canvas shortcuts (avoid triggering parent canvas shortcuts)
- fix: trigger edge creation from node only with left click
- fix: remove shortcuts on cmd+k (overriding vscode ones)

## [0.9.14] - 2025-03-16

- chore: update keywords
- chore: remove email barrier for feedback request

## [0.9.13] - 2025-03-16

- fix: horizontal scrolling on shift press
- chore: add telemetry

## [0.9.12] - 2025-03-03

- feat: screenshot
- fix: multiple folders workspace
- feat(internal): improve social links && feedback request
- feat: support svg for file node
- feat: shortcut f to toggle fullscreen && escape to close fullscreen

## [0.9.1] - 2025-02-24

- feat: drop file from ide into canvas
- feat: link/file title with lower opacity when not focus
- feat: file placeholder
- fix: file code pre tag is not full height
- feat: add icon for nested to differentiate from group
- feat: trigger nested placeholder according to its own scale
- feat: don't display menu on node drag/resize
- feat: pan horizontally when shift key active (windows/linux)
- fix: do not navigate to group on navigation shortcuts
- fix: label removed on edge edit
- fix: edge edit triggered on pan mouse middle
- fix: edge edit trigger dragging int nested canvas


## [0.9.0] - 2025-02-20

- refactor(internal): canvas container && recursive model accessible without dom
- feat: link node support from JSON Canvas spec
- feat: group node support from JSON Canvas spec
- refactor: align label/titles behaviors (edge, group, nested)
- feat: support image for file node
- feat: add grid style
- fix: group/nested title issues with node focus


## [0.8.0] - 2025-02-03

- feat(internal): config file for server side configs
- feat: ignored folders are deduced from vs code settings and .gitignore files
- fix: backlinks from file nodes work
- feat: add fit for file node && nested canvas
- feat: add collapse for file node
- feat: add sticky header for file node
- feat: copy/cut/paste node/group of nodes
- fix: fullscreen nested canvas not working when edit node behind
- fix: multiple node menu in fullscreen
- fix: shortcut not working in fullscreen
- feat: multiple selection thanks to keyboard shift/ctrl/meta + click
- feat: snap to grid
- feat: add zoom in/out menu && lock menu
- feat: create node from arrow without connection
- feat: add arrow shortcuts to move node position
- feat: pan on wheel click
- feat: add edge style/shape

## [0.7.0] - 2025-01-13

- feat: links to parts of canvas & navigation to canvas parts - zoom to node by its ID
- chore: added BE tests
- feat: backlink index creation & update on canvas files create/remode and canvases updates
- feat: bigpicture sidebar shows backlinks for current canvas or code file
- fix: canvas link index update on canvas file create/remove
- feat: canvas link view doesn't have .canvas extension
- fix: links are inline instead of block
- chore: refactored link data model. There 4 types of links now: canvas, symbolSuggestion, codeSymbol and file.
- chore: refactored link data model: remove url field form it
- fix: file remove update link suggestion indexes
- refacto: symbol node are now in file node
- refacto: bookmark node has a smart link instead of frontmatter
- fix: fps calculation issue when several canvas tabs open in vscode
- feat: canvas menu search link adds a node to canvas
- feat: keyboard shortcut for canvas menu search link
- fix: links inside list elements in markdown
- chore: moved all link logic to link.model.ts file
- fix: navigation when multiple symbol with the same name are in a common scope
- feat: when multiple columns are open, for code sybmols - navigate to the next column
- feat: rendering checklists in markdown
- feat: checkbox click handling logic in markdown
- feat: add posthog tracker
- feat: add helper (shortcut) sections
- feat: add contact us form
- feat: change nested canvas UI
- chore: refactored title inside nested canvas node from canvas
- chore: refactored placeholder and canvas title components from canvas componet to nested canvas node component

## [0.6.0] - 2024-12-20

- feat: links to other canvases and code files from inside canvas with autocomplete on their creation
- Navigation backend now works with links instead of path strings
- Temporarily: disabled frontmatter link click - need to implement link serialization
- Temporarily: click on link search result navigates to a link target
- fix: canvas link index canvas file extension
- fix: symbol link index relative path instead of full path
- feat: code entities in link search results are shown with a container entity
- chore: renamed hooky-sidebar project to hooky-test-sandbox
- feat(internal): added user focus manager VS code backend component
- feat: tree view sidebar for backlinks
- feat: icons
  - for canvas files inside file explorer and workspace panel (lucide icon layout-dashboard)
  - for new canvas command in sidebar (lucide icon package-plus)
- feat(internal): canvas is always rendered inside nested canvas node with canvas placeholder opaque on top of it

## [0.5.0] - 2024-11-08

### Added

- Canvas placeholder
- Text node full screen
- Drag nodes outside of a nested canvas

### Fixes

- nested canvas sync between webviews

### Other

- Backend refactoring

## [0.4.0] - 2024-10-17

### Added

- Canvas title & parents breadcrumbs
- Canvas title cursor position

### Fixes

- empty canvas add nodes issue
- node menu should be uniq and always visible

## [0.3.0] - 2024-09-19

### Added

- Multiple selection
- changed code hihglihgt library
- drop node into a nested canvasq

## [0.2.0] - 2024-09-06

### Added

- Nested canvas

## 0.1.0

- Canvas editor for canvas files
- "New Canvas" command
- "Add Boomark to Canvas" command
- + "Add Symbol to Canvas" command
