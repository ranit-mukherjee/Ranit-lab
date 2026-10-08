# Ranit-Lab website

Everything is edited as text. Preview: `bundle install`, then `bundle exec jekyll serve --livereload` (http://localhost:4000). Or edit on github.com and commit.

| To change | Edit |
|---|---|
| Lab name, tagline, email, address, hero image | `_config.yml` |
| Add or edit a project | `_projects/your-project.md` (copy one) |
| People, alumni | `_data/team.yml` (`status: pi / current / alumni`) |
| Grants (shown on Research page) | `_data/grants.yml` |
| Papers | `_data/papers.yml` |
| News | `_data/news.yml` (newest first) |
| Join us text | bottom of `people.html` |
| Fonts and colors | top of `assets/css/main.css` |

## Doodles
Drop any SVG or PNG into `doodles/`, then place it on any page, anywhere:

    {% include doodle.html file="cat.svg" right="4%" top="200px" w=160 rotate=-5 %}

Options: `top` `bottom` `left` `right` (px or %), `w` (width in px), `rotate` (degrees). Use it inside any page or project file. The sample doodles (cat, robot, rocket, elder, neighbor, books) are placeholders for your own sketches.

## Photos and videos
Put files in `images/` and write `/images/name.jpg` or `/images/name.mp4`. They appear in grayscale and turn to color on hover. Keep videos short; host long ones on YouTube or Vimeo.
