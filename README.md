# Lab website

Everything is edited as text. Preview: `bundle install`, then `bundle exec jekyll serve --livereload` (http://localhost:4000).
Or edit on github.com (pencil icon, Commit); the site rebuilds in about a minute.

| To change | Edit |
|---|---|
| Name, tagline, email, address | `_config.yml` |
| Add or edit a project | `_projects/your-project.md` (copy an existing one). Top block = nature/analog/physics captions, media, grants, members. Text below = "What we are learning" |
| Homepage scroll story | `_data/ladder.yml` |
| Physics themes and colors | `_data/themes.yml` |
| People (current, alumni) | `_data/team.yml` (`status: pi / current / alumni`) |
| Grants (bars on Funding page) | `_data/grants.yml` (start/end years, member ids) |
| Papers | `_data/papers.yml` (tag with grant ids and project names; counts update themselves) |
| News | `_data/news.yml` (newest first) |
| Join page / members page | `join.md`, `members.md` |
| Look | `assets/css/main.css` (colors at top) |

Media: put files in `images/` and write `/images/name.jpg` or `/images/name.mp4`. Keep videos short and compressed; host long ones on YouTube/Vimeo.
Project site on GitHub Pages: set `baseurl: "/your-repo-name"` in `_config.yml`, then Settings > Pages > Deploy from branch (main, root).
