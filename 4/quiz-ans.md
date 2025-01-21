<!-- @format -->

## 1. The content of second.md

```
A
B
$
C
#
%
E
F
```

## 2. If you accidentally add a file to the staging area, you can remove it using git reset. For example, if you accidentally add thrid.md, but don’t want it to be committed yet, run git reset thrid.md and the file will be removed from the staging area, but it will still be in your working directory.

`True`

## 3. The commands git reset and git revert can only be used to undo commits in the git repository.

`True`

## 4. The commands git checkout can be used to roll back to a certain commit hash (check the documentation if you are unsure).

`False`
git checkout use to switch branches or restore working tree files.

## 5. We cannot commit changes in the working directory directly to the repo without adding it to the staging index first (read the documentation if you are unsure)

`True`

## 6. git log -p and git log will give you the same output

`False`

## 7. git log --oneline and git log --stat will give you the same output

`False`

## 8. It is recommended that in most cases we should use git revert rather than git reset to undo commits because git revert is safer.

`False`
Both can be considered safe, if not using the --force flag. However, git revert create a new commit log which record the revert action, while git reset will remove the commit history.
