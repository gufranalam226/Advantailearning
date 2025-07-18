Day -1 

Git –version (check the version of git)
git config –global(--global, --local, --system) user.name “gufran” (configure the git user)
git config –global user.email “gufranalam226@gmail.com”
git init (initialize git repo)
git status (show the status of modified, unstages or untracked files)
git reset <filename> (remote file form staging area)
git rm –cached <filename>
git add. (command to add all modified file in once)
git commit -m “commit message” (save a snapshot of the current state of project)
git branch -M main ()
git checkout main (branch switch)
git remote add origin <url> (add remote repo to local)
git push –set-upstream origin main (set upstream for the local branch)
git push -u origin main ()
git push (push the local code changes to the remote)
git pull origin main
git log (history of commits along with commit message and commit unique hash)
git branch –remote
git branch—local
git checkout -b <branch name>
git switch -c <branch name>
git push origin –delete <branch name>
git merge <branch name>
git clone <url>
git revert <commit-hash>
git checkout <commit hash> (explore prev commit)
git reset –soft(--hard, --mixed) <commit hash> (reset head to prev in local)
git revert <commit hash> (for pushed commit create new commit without changing the commit history)
git rebase main  (rebase only form other then master or main branch, rebase rewrite the history, change the base of the branch to current position of main)
git add <filename> (if conflict come resolve and add to stag)
git rebase –continue (run after solving the conflict)
git stash
git stash pop
git stash apply
git stash --list
 



Day – 2


Github copilot – code completion, code generation, code awaqre chat, helps to write code, debug code and much more
Give suggestion by writing few characters
Also suggest multiple related response
*** Next edit – help to suggest next change if I do changes in code (not found in current version of vscode)***
Comment suggestion – copilot suggest for comments and also use comment as context to generate code 
Helps to write code with suggestion with full control of what to keep in code or what not
Inline chat feature – provide the ease to do changes in the code, modify the code, or fix the bug in the code
 Use instruction preview - .github/copilot-instructons.md – keep instruction short and precise help to provide the context
Code action – show a sine start when we select code it give option to review code(review code and suggest edites), modify code and much more
Sidebar chat – used for chatting and getting more details for the code or help and understand code, give explaination
Adding context – 
@
#
/
@WORKSPACE/NEW -  give the complete folder structure and code what is given in the prompt
@terminal
Inline chat in terminal – generate terminal command also
Add multiple file in providing context – providing multiple file generate more precise code and suggest changes in all the file as required
/tests – helps to do unit testing of the selected code
Prompt engineering – prompt should be specific – add useful context – add example – split complex task in small task
@workspace – give the current workspace as context
Github extensions – we can install github extension for specific code writing such as for stack overflow, docker , lambdatest etc.

Cursor AI – IDE with code editor with deep AI (fork of vscode)
Click tab tab and done coding like coding – suggest more specific code 
Smart suggestion feature suggests in the right side – suggest appropriate changes
Debug code – debug the code from the console error
MCP server (model context protocol) - 

Key bote – 
How github copilot work and cursor AI and kiro and other ide ai
