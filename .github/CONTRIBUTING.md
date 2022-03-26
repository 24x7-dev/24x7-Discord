# Contributing to 24x7

We would love for you to contribute to 24x7 and help make it even better than it is today!
As a contributor, here are the guidelines we would like you to follow:

- [Code of Conduct](#coc)
- [Question or Problem?](#question)
- [Issues and Bugs](#issue)
- [Feature Requests](#feature)
- [Submission Guidelines](#submit)
- [Coding Rules](#rules)
- [Commit Message Guidelines](#commit)
- [Signing the CLA](#cla)

## <a name="coc"></a> Code of Conduct

Help us keep 24x7 open and inclusive.
Please read and follow our [Code of Conduct](.github/CODE_OF_CONDUCT.md).

## <a name="question"></a> Got a Question or Problem?

Do not open issues for general support questions as we want to keep GitHub issues for bug reports and feature requests.
Instead, we recommend using [Discord Server](https://discord.gg/9yUjFtcFqP) to ask support-related questions.

Discord is a much better place to ask questions since:

- there are community people willing to help on Discord server
- questions and answers stay available for public viewing so your question/answer might help someone else

To save your and our time, we will systematically close all issues that are requests for general support and redirect people to Discord server.

## Getting Help
At some point, you may find that there's an issue you need some help with. But don't worry! We're a friendly community of developers and we'd love to help.

"I can't figure out how to __."
You've read through these docs and you think it should be possible, but it's not clear how. The best thing is to open a [Discord Discussion](https://discord.gg/9yUjFtcFqP) .

Please don't feel embarrassed about asking a question that you think is easy - we've all been there! ❤️

Everyone you'll encounter is helping out because they care, not because they are paid to do so. The kindest thing to do is make it easy for them to help you. Here are some ideas:

- Explain your goal, not just the problem you are facing.
- Make sure you've read the documents first and used your favorite search engine. Let people know by saying something like, "I Googled, but I couldn't find any code samples anywhere."
- Explain what you tried. Tell people what solutions you experimented with and why. This can often make people's advice more relevant to your situation.
- Share your code. People probably won't be able to help you if they only see an error message or screenshot - but that changes if you share your code in a copy-and-paste format - preferably in the form of a minimal reproduction like a [CodeSandbox](https://codesandbox.io) or with [SourceBin](https://sourceb.in).

And finally, just ask the question! There's no need to [ask permission to ask a question](https://dontasktoask.com) or [wait for someone to reply to your 'hello'](https://www.nohello.com) . If you do, you might not get a response because people are waiting for the whole question before engaging.

## <a name="issue"></a> "Could there be a bug?"

Something isn't working the way that the docs say that it should. You're not sure if it's a bug. You've searched through the [open issues](https://github.com/24x7-dev/24x7-Bot/issues) but you can't find anything. (if there is a closed issue, please create a new one).

You can help us by [submitting an issue](#submit-issue) to our [GitHub Repositorys](https://github.com/orgs/24x7-dev/repositories).
Even better, you can [submit a Pull Request](#submit-pr) with a fix.

## <a name="feature"></a> Missing a Feature?

You can _request_ a new feature by [submitting an issue](#submit-issue) to our GitHub Repository.
If you would like to _implement_ a new feature, please consider the size of the change in order to determine the right steps to proceed:

- For a **Major Feature**, first open an issue and outline your proposal so that it can be discussed.
  This process allows us to better coordinate our efforts, prevent duplication of work, and help you to craft the change so that it is successfully accepted into the project.

  **Note**: Adding a new topic to the documentation, or significantly re-writing a topic, counts as a major feature.

- **Small Features** can be crafted and directly [submitted as a Pull Request](#submit-pr).

- **Project Board**:
You can also submit a request to our [Project Board](https://github.com/orgs/24x7-dev/projects). And there you can do the already requested tasks together with us.

## <a name="submit"></a> Submission Guidelines

### <a name="submit-issue"></a> Submitting an Issue

Before you submit an issue, please search the [issue tracker](https://github.com/24x7-dev/24x7-Bot/issues). An issue for your problem might already exist and the discussion might inform you of workarounds readily available.

We want to fix all the issues as soon as possible, but before fixing a bug, we need to reproduce and confirm it.
In order to reproduce bugs, we require that you provide a minimal reproduction.
Having a minimal reproducible scenario gives us a wealth of important information without going back and forth to you with additional questions. An example would be a reproduction with [CodeSandbox](https://codesandbox.io).

A minimal reproduction allows us to quickly confirm a bug (or point out a coding problem) as well as confirm that we are fixing the right problem.

We require a minimal reproduction to save maintainers' time and ultimately be able to fix more bugs.
Often, developers find coding problems themselves while preparing a minimal reproduction.
We understand that sometimes it might be hard to extract essential bits of code from a larger codebase but we really need to isolate the problem before we can fix it.

Unfortunately, we are not able to investigate / fix bugs without a minimal reproduction, so if we don't hear back from you, we are going to close an issue that doesn't have enough info to be reproduced.

You can file new issues by selecting from our [issue templates](https://github.com/24x7-dev/24x7-Bot/issues/new/choose) and filling out the issue template.

### <a name="submit-pr"></a> Submitting a Pull Request (PR)

Before you submit your Pull Request (PR) consider the following guidelines:

1. Search [GitHub](https://github.com/24x7-dev/24x7-Bot/pulls) for an open or closed PR that relates to your submission.
   You don't want to duplicate existing efforts.

2. Be sure that an issue describes the problem you're fixing, or documents the design for the feature you'd like to add.
   Discussing the design upfront helps to ensure that we're ready to accept your work.

3. Please sign our [Contributor License Agreement (CLA)](#cla) before sending PRs.
   We cannot accept code without a signed CLA.
   Make sure you author all contributed Git commits with email address associated with your CLA signature.

4. [Fork](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo) the [24x7-Bot](https://github.com/24x7-dev/24x7-Bot) repo.

5. In your forked repository, make your changes in a new git branch:

   ```shell
   git checkout -b my-fix-branch master
   ```

6. Create your patch, **including appropriate test cases**.

7. Follow our [Coding Rules](#rules).

8. Install all dependencies

9. Commit your changes using a descriptive commit message that follows our [commit message conventions](#commit).
   Adherence to these conventions is necessary because release notes are automatically generated from these messages.

   ```shell
   git commit --all
   ```

   Note: the optional commit `-a` command line option will automatically "add" and "rm" edited files.

10. Push your branch to GitHub:

    ```shell
    git push origin my-fix-branch
    ```

11. In GitHub, send a pull request to `24x7-Bot:main`.

### Reviewing a Pull Request

The 24x7 team reserves the right not to accept pull requests from community members who haven't been good citizens of the community. Such behavior includes not following the [24x7 code of conduct](https://github.com/24x7/24x7-Bot/blob/main/.github/CODE_OF_CONDUCT.md) and applies within or outside of 24x7 managed channels.

## <a name="rules"></a> Coding Rules

To ensure consistency throughout the source code, keep these rules in mind as you are working:

- All features or bug fixes **must be tested** by one or more specs (unit-tests).
- All public API methods **must be documented**.
- We follow [Google TypeScript Style Guide](https://google.github.io/styleguide/tsguide.html).

  An automated formatter is available.

## <a name="commit"></a> Commit Message Format

We have very precise rules over how our Git commit messages must be formatted.
This format leads to **easier to read commit history**.

You can find our commit message convention [here](https://github.com/24x7/24x7-Bot/blob/main/.github/COMMIT_CONVENTION.md)

## <a name="cla"></a> Signing the CLA

Please sign our Contributor License Agreement (CLA) before sending pull requests. For any code
changes to be accepted, the CLA must be signed. It's a quick process, we promise!

- For individuals, we have a [simple click-through form]().
- For corporations, we'll need you to
  _***print, sign and one of scan+email, fax or mail the form***_.

If you have more than one GitHub accounts, or multiple email addresses associated with a single GitHub account, you must sign the CLA using the primary email address of the GitHub account used to author Git commits and send pull requests.

The following documents can help you sort out issues with GitHub accounts and multiple email addresses:

- https://help.github.com/articles/setting-your-commit-email-address-in-git/
- https://stackoverflow.com/questions/37245303/what-does-usera-committed-with-userb-13-days-ago-on-github-mean
- https://help.github.com/articles/about-commit-email-addresses/
- https://help.github.com/articles/blocking-command-line-pushes-that-expose-your-personal-email-address/