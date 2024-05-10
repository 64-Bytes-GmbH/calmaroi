<!-- Install Markdown Preview Enhanced to view md in propper format, then cmd-k v or ctrl-k v-->


##calmaroi! - Documentation
#### Tailwind / Flowbite
```python
# Install tailwindcss using NPM
npm install -D tailwindcss flowbite
```


```python
#If necessary and CSS not loading properly, initiate tailwind CLI (important!: copy the content of tailwind.config.js first, delete it and then run the command)
npx tailwindcss init
```

```python
# To update tailwind css using watcher
npx tailwindcss -i ./app/static/app/css/input.css -o ./app/static/app/css/output.css --watch
```

#### Algolia - Search function
```python
pip install --upgrade 'algoliasearch-django>=3.0,<4.0'
```

```python
# Reindex all the registered models. This command first sends all records to a temporary index and then moves it. Pass --model as a parameter to reindex a specific model:
python manage.py algolia_reindex
```
```python
# Apply or reapply the index settings:
python manage.py algolia_applysettings
```
```python
# clear the index
python manage.py algolia_clearindex
```