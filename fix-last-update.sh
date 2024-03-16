export TZ='Asia/Tokyo'
git ls-files -z | while read -d '' path; do
    if [[ $path == source/_posts/* ]]; then
        touch -d "$(git log -1 --format="@%ct" "$path")" "$path"
        printf "$(git log -1 --format="%ct" "$path" | xargs -I{} date -d @{} "+%Y-%m-%d %H:%M:%S")"
        printf \\t
        echo "$path"
    fi
done
