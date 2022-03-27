# Git Commit Message Convention

The commit message should be structured as follows:

```ssh
<type>[optional scope]:
[optional body]
[optional footer(s)]
```

The handover contains the following structural elements to communicate our intent to our library users:

1. 🐛fix: a commit of the type 🐛fix patches a bug in your codebase (this correlates with PATCH in Semantic Versioning).
2. ✨feat: a commit of the type ✨feat introduces a new feature to the codebase (this correlates with MINOR in Semantic Versioning).
3. 💥BREAKING CHANGE: a commit that has a footer 💥BREAKING CHANGE: or appends a ❗ before the 💥 introduces a breaking API change (equivalent to MAJOR in Semantic Versioning). A 💥BREAKING CHANGE can be part of commits of any type.
4. types other than 🐛fix: and ✨feat: are allowed, for example [@commitlint/config-conventional](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines '@commitlint/config-conventional') (based on the [the Angular convention](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines 'the Angular convention')) 📖recommends build:, 🧹chore:, 👷ci:, 📝docs:, 🎨style:, ♻️refactor:, ⚡️perf:, 🧪test:, and others.
5. footers other than 💥BREAKING CHANGE: `'<description>'` may be provided and follow a convention similar to [git trailer format](https://git-scm.com/docs/git-interpret-trailers 'git trailer format').

## Examples

---

### Commit message with description and breaking change footer

```ssh
✨feat: allow provided config object to extend other configs
💥BREAKING CHANGE: `extends` key in config file is now used for extending other config files
```

#### Commit message with❗to draw attention to breaking change

```ssh
❗✨feat: send an email to the customer when a product is shipped
```

#### Commit message with scope and❗to draw attention to breaking change

```ssh
❗✨feat(api): send an email to the customer when a product is shipped
```

#### Commit message with both❗and BREAKING CHANGE footer

```ssh
❗chore: drop support for Node 6
💥BREAKING CHANGE: use JavaScript features not available in Node 6.
```

#### Commit message with no body

```ssh
📝 docs: correct spelling of CHANGELOG
```

#### Commit message with scope

```ssh
✨📝 feat(lang): add Polish language
```

#### Commit message with multi-paragraph body and multiple footers

```ssh
🐛 fix: prevent racing of requests

Introduce a request id and a reference to latest request. Dismiss
incoming responses other than from latest request.

Remove timeouts which were used to mitigate the racing issue but are
obsolete now.

Reviewed-by: @VidarDev
Refs: #123
```

## Specification

---

The key words “MUST”, “MUST NOT”, “REQUIRED”, “SHALL”, “SHALL NOT”, “SHOULD”, “SHOULD NOT”, “RECOMMENDED”, “MAY”, and “OPTIONAL” in this document are to be interpreted as described in [RFC 2119](https://www.ietf.org/rfc/rfc2119.txt 'RFC 2119').

1. Commits MUST be provided with a type consisting of the appropriate emoji and a noun, ✨feat, 🐛fix, etc., followed by the OPTIONAL scope, OPTIONAL❗and the REQUIRED terminal colon and space.
2. The ✨feat type MUST be used when a commit adds a new function to your application or library.
3. The type 🐛fix MUST be used when a commit is a bug fix for your application.
4. A scope MAY be specified after a type. A Scope MUST consist of a noun describing a section of the codebase, surrounded by parentheses, e.g. 🐛fix(parser):
5. A description MUST immediately follow the colon and space after the type/scope prefix. The description is a short summary of the code changes, e.g. 🐛fix: array parsing issue when multiple spaces were contained in string.
6. The short description MAY be followed by a longer commit body containing additional contextual information about the code changes. The body MUST start one empty line after the description.
7. A commit body is free-form and MAY consist of any number of paragraphs separated by newlines.
8. One or more footers MAY be inserted one blank line after the body. Each footer MUST consist of a word token, followed by a `:<space> or <space>#` separator, followed by a string value (this follows the Git trailer convention).
9. The token of a footer MUST use - instead of space, e.g. acked-by (this helps to distinguish the footer section from text with multiple paragraphs). An exception is made for BREAKING CHANGE, which MAY also be used as a token.
10. The value of a footer MAY contain spaces and line breaks, and parsing MUST stop when the next valid token/separator pair is recognized for the footer.
11. Breaking changes MUST be specified in the type/scope prefix of a commit or as an entry in the footer.
12. In the footer, a Breaking Change MUST be accompanied by the appropriate emoji 💥and consist of the text BREAKING CHANGE in uppercase, followed by a colon, a space, and a description, e.g. BREAKING CHANGE: environment variables now take precedence over config files.
13. If included in the type/scope prefix, BREAKING CHANGE MUST be indicated by a❗immediately preceding the 💥. If❗is used, 💥BREAKING CHANGE: MAY be omitted from the footer, and the commit description MUST be used to describe the breaking change.
14. Types other than ✨feat and 🐛fix MAY be used in your commit messages, e.g. 📝docs: updated ref docs.
15. The units of information that make up conventional commits MUST NOT be case-sensitive by implementers, except for BREAKING-CHANGE, which MUST be capitalized.
16. BREAKING-CHANGE MUST be a synonym of BREAKING CHANGE when used as a token in a footer.
17. Every commit must start with an emoji

## Used commit emojis

---

The emojis are from Carlos Cuesta's [visual page](https://gitmoji.carloscuesta.me/ 'visual page') and [CLI](https://github.com/carloscuesta/gitmoji 'CLI').
Our recommended editor is Visual Studio Code. To make it easier for you there is also a matching emoji extension [Gitmoji Visual Studio extension](https://marketplace.visualstudio.com/items?itemName=seatonjiang.gitmoji-vscode 'Gitmoji Visual Studio extension').
We have classified them below in a more concise way:

### Status / Warnings

| ico                 |       shortcode       | description                                 |
| ------------------- | :-------------------: | ------------------------------------------- |
| :tada:              |       `:tada:`        | Initial (NEW) commit.                       |
| :construction:      |   `:construction:`    | Work in progress.                           |
| :ambulance:         |     `:ambulance:`     | Critical hotfix.                            |
| :sparkles:          |     `:sparkles:`      | Introducing new features.                   |
| :beers:             |       `:beers:`       | Writing code drunkenly.                     |
| :hankey:            |      `:hankey:`       | Writing bad code that needs to be improved. |
| :rotating_light:    |  `:rotating_light:`   | Removing linter warnings.                   |
| :rewind:            |      `:rewind:`       | Reverting changes.                          |
| :alembic:           |      `:alembic:`      | Experimenting new things                    |
| :lock:              |       `:lock:`        | Fixing security issues.                     |
| :zap:               |        `:zap:`        | Improving performance.                      |
| :children_crossing: | `:children_crossing:` | Improving user experience / usability.      |
| :bug:               |        `:bug:`        | Fixing a bug.                               |

### Documentation

| ico                   |        shortcode        | description              |
| --------------------- | :---------------------: | ------------------------ |
| :memo:                |        `:memo:`         | Writing docs.            |
| :bulb:                |        `:bulb:`         | Documenting source code. |
| :mag:                 |         `mag:`          | Improving SEO            |
| :busts_in_silhouette: | `:busts_in_silhouette:` | Adding contributor(s).   |
| :book:                |        `:book:`         | Issue.                   |

### Testing

| ico                |      shortcode       | description                               |
| ------------------ | :------------------: | ----------------------------------------- |
| :white_check_mark: | `:white_check_mark:` | Updating tests.                           |
| :ok_hand:          |     `:ok_hand:`      | Updating code due to code review changes. |
| :clown_face:       |    `:clown_face:`    | Mocking things.                           |

### Dependency management

| ico                 |      shortcode       | description                                |
| ------------------- | :------------------: | ------------------------------------------ |
| :boom:              |       `:boom:`       | Introducing breaking changes.              |
| :arrow_down:        |    `:arrow_down:`    | Downgrading dependencies.                  |
| :arrow_up:          |     `:arrow_up:`     | Upgrading dependencies.                    |
| :pushpin:           |     `:pushpin:`      | Pinning dependencies to specific versions. |
| :heavy_plus_sign:   | `:heavy_plus_sign:`  | Adding a dependency.                       |
| ::heavy_minus_sign: | `:heavy_minus_sign:` | Removing a dependency.                     |

### Coding Content

| ico                        |          shortcode           | description                                  |
| -------------------------- | :--------------------------: | -------------------------------------------- |
| :building_construction:    |  `:building_construction:`   | Making architectural changes.                |
| :fire:                     |           `:fire:`           | Removing code or files.                      |
| :pencil2:                  |         `:pencil2:`          | Fixing typos.                                |
| :loud_sound:               |        `:loud_sound:`        | Adding logs.                                 |
| :mute:                     |           `:mute:`           | Removing logs.                               |
| :art:                      |           `:art:`            | Improving structure / format of the code.    |
| :recycle:                  |         `:recycle:`          | Refactoring code logic.                      |
| :construction_worker:      |   `:construction_worker:`    | Adding CI build system.                      |
| :rocket:                   |          `:rocket:`          | Deploying stuff.                             |
| :bookmark:                 |         `:bookmark:`         | Releasing / Version tags.                    |
| :speech_balloon:           |      `:speech_balloon:`      | Updating text and literals.                  |
| :chart_with_upwards_trend: | `:chart_with_upwards_trend:` | Adding analytics or tracking code.           |
| :wheel_of_dharma:          |     `:wheel_of_dharma:`      | Work about Kubernetes.                       |
| :globe_with_meridians:     |   `:globe_with_meridians:`   | Internationalization and localization.       |
| :egg:                      |           `:egg:`            | Adding an easter egg.                        |
| :label:                    |          `:label:`           | Adding or updating types (Flow, TypeScript). |
| :card_file_box:            |      `:card_file_box:`       | Performing database related changes.         |
| :wheelchair:               |        `:wheelchair:`        | Improving accessibility.                     |
| :lipstick:                 |         `:lipstick:`         | Updating the UI and style files.             |

### Configuration / Metadata

| ico                         |           shortcode           | description                                |
| --------------------------- | :---------------------------: | ------------------------------------------ |
| :whale:                     |           `:whale:`           | Work about Docker.                         |
| :green_heart:               |        `:green_heart:`        | Fixing CI Build.                           |
| :wrench:                    |          `:wrench:`           | Changing configuration files.              |
| :twisted_rightwards_arrows: | `:twisted_rightwards_arrows:` | Merging branches.                          |
| :package:                   |          `:package:`          | Updating compiled files or packages.       |
| :alien:                     |           `:alien:`           | Updating code due to external API changes. |
| :truck:                     |           `:truck:`           | Moving or renaming files.                  |
| :page_facing_up:            |      `:page_facing_up:`       | Adding or updating license.                |
| :bento:                     |           `:bento:`           | Adding or updating assets.                 |
| :see_no_evil:               |        `:see_no_evil:`        | Adding or updating a .gitignore file.      |
| :camera_flash:              |       `:camera_flash:`        | Adding or updating snapshots.              |
| :iphone:                    |          `:iphone:`           | Working on responsive design.              |

### Operating system specific

| ico              |     shortcode      | description                  |
| ---------------- | :----------------: | ---------------------------- |
| :green_apple:    |  `:green_apple:`   | Fixing something on iOS.     |
| :apple:          |     `:apple:`      | Fixing something on macOS.   |
| :penguin:        |    `:penguin:`     | Fixing something on Linux.   |
| :checkered_flag: | `:checkered_flag:` | Fixing something on Windows. |
| :robot:          |     `:robot:`      | Fixing something on Android. |
