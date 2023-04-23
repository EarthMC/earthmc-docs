---
slug: /quality-of-life-update
title: Quality of life update
hide_table_of_contents: true
---

## Official API
EarthMC now has an official API in courtesy of Fruitloopins!

### Accessing the API
The API can be accessed through the URL `api.earthmc.net`, it provides data in JSON format and consists of 3 main endpoints that provide Towny data, `/v1/aurora/residents/`, `/v1/aurora/towns/`, and `/v1/aurora/nations/` with an additional endpoint for server info at just `/v1/aurora/`.

### Endpoint details
#### Server info endpoint
This endpoint is the most simplistic providing info such as the number of online players, the player cap, and the current weather and time.

#### Residents endpoint
To get more specific data on a resident you can append their username or UUID to the end of the residents URL, for example `api.earthmc.net/v1/aurora/residents/Fruitloopins` will return info about the resident Fruitloopins including their town and nation affiliation, gold balance, title and surname, and their town and nation ranks.

#### Towns endpoint
Accessed at `api.earthmc.net/v1/aurora/towns/`, this endpoint provides a key showing the number of towns along with a list of all towns. A town name can be appended to the end of the URL to query specific info about that town such as all the residents in it, when it was founded, all the players with ranks in it and much more.

#### Nations endpoint
Nation data can be accessed through the URL `api.earthmc.net/v1/aurora/nations/`, just like with towns it will show the quantity of nations and a list of all nations, you can access data about a specific nation by appending the nation name to the end of the URL i.e. `/nations/Cascadia`, this will return info such as the nation's board message, it's residents, when it was founded, and it's n spawn's coordinates.

### Usage example
Print a list of all nations that a nation still needs to ally
```py
nation = "Australia"

allNationsLookup = requests.get("https://api.earthmc.net/v1/aurora/nations/").json()
nationsLookup = requests.get(f"https://api.earthmc.net/v1/aurora/nations/{nation}").json()

allyList = nationsLookup["allies"]
allNations = allNationsLookup["allNations"]
allNations.remove(nationsLookup["strings"]["nation"])

unalliedList = list(set(allNations).difference(set(allyList)))
print(unalliedList)
```

---

## Teleport to any town in your own nation
It is now possible to spawn to any town in your own nation. The technology is finally here.

---

## Mystery crates 2.0
![New mystery crate][/img/mc2.png]

![town](/img/town.png)
Mystery crates contain random cosmetic player heads. They are used for decoration, hats and collections but provide no gameplay advantage. These collectibles have been available through Mystery crates for a few years now. The old crate system was showing its age so it has been reworked from scratch. 

* Animations now run faster and smoother regardless of current TPS.
* New head collectibles have been added. 
* Better Legendary heads.
* There are now much fewer "bad" rewards such number and letter heads.
* Persistant head lore:
	* "Found" indicates when the collectible was found. This will hopefully add some novelty to ancient collectibles.
	* "Rarity" indicates head rarity.
	* "Quality" indicates the condition the collectible is in, similar to wear for those familiar with CSGO skins.
* Text gradient support.

For a limited time, everyone can get 1 free Mystery crate from the store available here:

## New gold crates
New gold crates will be introduced later next week. Gold crates are awarded to players that vote for the server. Many of the benefits described above also carries over to the new gold crates. The animations are smoother and look better. The new gold crates also gives out slightly more gold on average. Minimum amount of gold per crate is now 2. 

---

## Map ISO render
![iso dynmap earthmc](/img/isorender.png)
This was added some time ago but hasn't been properly announced. You can now toggle from 2D render to ISO render in the right hand side menu. Direct link here: https://earthmc.net/map/aurora/?worldname=earth&mapname=surface

---

## Preserving history - Classic in spectator mode

Classic was the first iteration of EarthMC. It was online from 2016 until 2018. You can now visit Classic in spectator mode with the command /joinqueue classic. It's important to preserve server history. Classic dynmap will be available in the near future.

---

## Teleport to any town in your own nation
It is now possible to spawn to any town in your own nation.



