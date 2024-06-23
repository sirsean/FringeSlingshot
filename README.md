# The Fringe: Slingshot

This was developed in Replit, so the easiest way to run a dev copy is just to hit the Run button.

If you're running it locally on your own hardware, you can probably do something like

```bash
npm install
npm run dev
```

and that might get it up and running.

## Stories

Each story gets its own JSON file to describe its encounters.

See, for instance, `src/data/chapter-one.json`.

A story consists of `encounters`, and has a `startEncounter` to reference the first encounter in the story.

## Editing the Story

There are "encounters", which consist of "screens". Here's an example of what that JSON may look like:

```json
"duzi-intro": {
  "startScreen": "screen1",
  "screens": {
    "screen1": {
      "background": "/img/bar/background1.png",
      "bartop": "/img/bar/bartop1.png",
      "character": "/img/characters/drifter07/drifter07.png",
      "text": "Welcome to the best mugbar on the station. Ye must be the new bartender. Hope ye last longer than the last one!",
      "choices": [{ "text": "Me too", "nextScreen": "screen2" }]
    },
    "screen2": {
      "background": "/img/bar/background1.png",
      "bartop": "/img/bar/bartop1.png",
      "character": "/img/characters/drifter07/drifter07.png",
      "text": "Drifters bound for The Fringe are a motley lot, each has a tale to chant. Ah, here comes the first patron now!",
      "fontFamily": "gt-pressura",
      "choices": [{ "text": "Get to it", "nextEncounter": "roundpower" }]
    }
  }
},
```

You can name your encounters/screens whatever you want to, you will reference them in other parts of your JSON. The screen names are unique _within_ an encounter, but do not have to be globally unique. A screen is not necessarily shown during an encounter, if the player makes choices that do not activate the screen.

The encounter's `startScreen` defines which screen is shown first when the encounter starts.

The `choices` will be shown as buttons at the bottom of the screen. You can include any number of these; zero choices means the game is over, and be aware that the limit on the number of choices is defined by how many buttons will fit on the screen.

The `background`/`bartop`/`character` fields are paths into the `public/` directory, where we store our images.

The `background`/`bartop` are generally intended to be a pair, where the bartop is displayed at the bottom of the screen, overlaid on top of the background so we can swap out what appears to be sitting on the bar.

The `background` is required, but `bartop`/`character`/`text`/`fontFamily` are optional.