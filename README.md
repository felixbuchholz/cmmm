# CMMM Belgrade

## Image folder 
You can find the image folder [here](https://github.com/felixbuchholz/cmmm/tree/main/website/public/img)

## Git Workflow

### Reference

- [merge](https://www.atlassian.com/git/tutorials/using-branches/git-merge)
- [rebase](https://www.atlassian.com/git/tutorials/rewriting-history/git-rebase)
- [thougthbot-tutorial](https://thoughtbot.com/upcase/mastering-git)

### Goal

Creating a descriptive and expressive git history without the noise of many merge commits. Conflicts are resolved on each feature / edit branch.

### Steps 
1. Always start by checking out the main branch first and get all updates from the origin: `!git checkout main && git pull`
2. Create feature / edit branch `git checkout -b yi-edit-name`, where yi would be your own initials and edit-name the edit or feature name. Please use snake case here. 
3. Make commits to your branch with good commit messages with `git add` and `git commit`.
4. Push your branch to the remote origin with `git push -u origin`.
5. Create a pull request on [GitHub/pulls](https://github.com/felixbuchholz/cmmm/pulls)
6. Once you’re done, prepare your branch for merging into main:
   1. Update the your local main with changes from the remote and switch back to your local feature branch: `!git checkout main && git pull && git checkout -`
   2. Rebase your branch onto main: `rebase -i main`, -i is optional if you want to clean up your commit history.
   3. If there are conflicts resolve them, and confirm them with `git add` and `git commit` and continue the rebase with `git rebase --continue`. 
7. When you’re happy with the rebase push it with the --force option to the remote. `git checkout yi-edit-name`, to make sure you’re on the right branch and then `git push origin --force-with-lease`.
8. Request review on your pull request.
9. Once you got the approval you can merge the changes into main with `git checkout main && git merge - --ff-only`