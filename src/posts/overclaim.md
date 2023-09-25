---
slug: /overclaim
title: Overclaim whitepaper
hide_table_of_contents: false
authors:
  - name: Fix
    title: Owner
    image_url: https://github.com/FixTheAdmin.png
  - name: CorruptedGreed
    title: Admin
    image_url: https://github.com/CorruptedGreed.png
---

## Summary
Overclaim, the ability under certain circumstances to claim over already claimed chunks, will come to EarthMC early next year. This change will be made in order to balance gameplay, increase map longevity and combat the issue of dead towns squatting land. The topic of overclaim has been debated both internally and within the community for the past few months. The community deserves know what's behind this decsion, how overclaim will actually work and why it will benefit the server. This change does not affect towns with 88 or less chunks claimed.
Overclaiming will be introduced 2024-01-01. A grace period will start this 2023-10-01 in order to make a smooth transition. More details below.

## How the claim limit currently works
It’s important to fully understand how the current claim limit works in order to understand overclaiming. Let’s use the fictional town Åköping as an example. The total amount of land the town Åköping has claimed and the total claim limit is represented on its town board (/t Åköping) as follows:

Town size: 100/140 [NationBonus 80]

This means that the town has claimed 100 chunks and has 40 more to go until the limit 140 is reached. Every town gets the ability to claim up to 8 claims per resident. There’s also a claim bonus for joining a nation, up to 80 claims depending on nation size. Similarly, if a resident leaves Åköping or if Åköping leaves its nation, the claim limit is lowered. 
The mayor of Åköping decides to leave the nation. 2 residents also leave. The town board would now show:

Town size: 100/46

The 100 already claimed chunks are unaffected. The only downside of having more claims than the limit is that Åköping can’t expand further. 

## The purpose of the current claim limit
From the above example it is clear that residents are directly tied to a town's ability to expand. This has been a core gameplay mechanic since EarthMC launched in 2016. The idea behind tying resident count to town size seems logical, residents need somewhere to build their homes and by doing so they warrant land expansion. Land is limited and has to be shared by players in order for the gameplay loop to work. It therefore makes sense to tie the claim limit to resident count instead of other resources such as gold.

## The hidden problem - claim inflation
Towns never decrease in size even after residents leave. A resident called Bertil wants to leave a town that is fully claimed. Throughout his time on the server Bertil joins 7 different towns. In each town the mayor uses the 8 claims Bertil has increased the claim limit by. Bertil alone has now spawned 7x8=56 claims. These 56 chunks will never be unclaimed. Claims are inflated for every resident joining a town. The real life equivalent would be something similar to moving places but all past homes must sit empty and take up space. This becomes an issue as land is a limited resource.

More commonly, a resident joins a town and then goes inactive forever. A third of all new players leave never to return after their first join. Even so, the 8 claims the resident has contributed to are claimed forever even though those claims will never be used by the player. 8 chunks forever claimed for every one-off player, players of which there are hundreds every day.

This obviously scales poorly. Number of claims gets inflated and has little correlation to the amount of residents a town has and by extension to what a town needs. The purpose of having an upper limit to claims in the first place was to limit towns from expanding past their population needs. This current limit is completely bypassed when towns never shrink, allowing for large towns with low resident counts. The issue is further escalated by increased server popularity, long map longevity and mayors sometimes actively kicking residents after claiming to get the land for themselves.

Even though claim inflation usually goes unnoticed, the symptoms are more obvious. Claim inflation makes the map static. Players have no ability to utilize unused but claimed land. Mayors of active towns are boxed in or blocked by large low resident towns. Resident experience is bad as mayors have no incentive to keep and care for them after town has been claimed up to the limit. Nations build large and unfinished structures that sit empty for years until the map eventually resets. A general notion in the community is that nobody actually lives in Europe, even though it has the most sought after land. It is quite telling of the problems we are dealing with. 

Throughout the coming years, hundreds of thousands of players will pass through the server. A large majority of them will end up leaving when they realize there is no place to build. New and future players are the ones most affected by the issues described above. They are however unlikely to bring this up since they’re not yet invested in the server, they simply leave never to return. This has to be considered when looking at various community made polls on this subject. Regardless of what you think the solution is, we have to recognize this is a very real and lasting problem that has to be addressed. On that note, let’s talk about the proposed solution.

## The possible solution - Overclaiming
> Towns above the claim limit can be claimed over by other neighboring towns until the number of claims is equal to the limit. 

For example, a town with size 100/96 has 4 claims over the limit. A neighboring town can overclaim 4 chunks until the size is 96/96. At that point the town is fully protected from being overclaimed since the number of claims is equal to the claim limit.

There are some important considerations and limitations to this feature that should be considered.

- All single resident towns have up to 88 claims protected from overclaiming, 80 from nation claim bonus and by 8 default. Only towns over 88 claims would be affected. Plenty of land for a single player to use.    
- Town can never be fully overclaimed, the lowest possible claim limit with 1 resident is 8 chunks.
- Towns can still have max claims (940) with 1 resident, but would not be protected from overclaiming.
- It’s not possible to overclaim a straight line into another town. Town must own 3 adjacent claims before it can overclaim a chunk.
- A system is in place to prevent towns from being split in two. 
- New towns must be created at least 3 chunks away from the second closest town. Since it isn’t possible to claim in a straight line any longer, it takes significant resources before a single town becomes a threat to the neighboring town.
- The homeblock of a town is always protected from being overclaimed.    

## Benefits of having an overclaim system
- Incentivises towns to keep their residents from leaving, improving resident gameplay experience. Residents make out a majority of the playerbase.
- Mayors will be more deliberate and careful about which land they choose to claim and at what location. More strategy to claim selection.
- Creating a town in less populated areas would now be a valid strategy in order to avoid enemies. Towns in general would be more spread out in the long run which would make more efficient use of map space.
- Towns will optimize for land utility rather than town size. It would be wasteful to claim more land until the land already claimed has been fully built and utilized.
- Unused land is a liability to the town. This creates incentive to free up unused claims which in turn makes land more available to players.
- Lowers the need for resets. Empires will naturally expand and shrink depending on popularity.
- Map becomes more dynamic and can change over time. It’s unsustainable to give mayors divine right to the land for years while inactive.
- Would allow players to deal with claim blocking on their own instead of having to manually report to staff which in turn has to make complicated decisions on who is in the right. See section “3.3 Town claims” in server rules. The most complicated rule to enforce, a headache for both staff and players.
- New towns will not be able to overclaim for the first month.

## The alternatives we’ve considered and why they’re not a solution to the problem

Wars -  There are several issues with tying expansion to methods of war. PvP is easy to exploit through cheat clients and would give cheaters a huge leverage. It’s also problematic if armies are stuck in queue while their land is getting conquered. Wars as a gameplay mechanic is still a valid feature suggestion, as long as it isn’t tied to land acquisition which is the topic we are dealing with now.

Reset - “Just reset the server”. A solution that also scales poorly. In a matter of time before we’ll be back where we are today unless we try to solve the root cause. A variant to this suggestion is that we should have gone with a larger map when Aurora was introduced. Town and nation locations would still have specific locations even on a 1:1 scale earth map. London can only be located where London is. Land squatters would still claim these highly sought after locations. A larger map does not address the problem described above, it only slows it down. There’s a lot of things we could have done in hindsight but it doesn’t really help us today.

Manual staff removal - Players have asked if staff can set a standard for removing inactive towns, or a rule dedicated to it. This is simply unfeasible due to the manual human review and subjectivity required. We want to aim for an objective and automated system that players can abide by. This would also require immense staff power/resources which would result in delays and unequal enforcement.

Claim decay system - Several players have proposed that random claims should be removed if over the claim limit. We don’t mind players having claims over the limit, there’s no reason to unclaim land that nobody else wants. A claim decay system would be too invasive.

Upkeep - The suggestion revolves around various ideas of introducing gold upkeep for claims. As described above, it’s good to tie town expansion to resident count since larger towns have more residents to account for. On a broader scale we want to benefit towns that house the player base since all players, regardless of position, need land to play the game. Tying expansion to gold would only benefit monopolies and strengthen their position. A similar suggestion involves introducing upkeep for claims only over the claim limit. The reason against this is similar to the reason against a claim decay system, we don’t want to punish players that have large towns in areas where nobody wants to own land. We are perfectly fine with 1 man 940 chunk towns if nobody wants the land. Introducing upkeep would force these towns to shrink for no good reason. Someone might want to pay extra gold to protect what they have but in that case we fall back to what was said about upkeep in general, we don’t want to make the claim limit dependent on wealth. Ability to expand has to correlate with the need to expand in terms of housing residents, otherwise we’ll end up similar to the current unsustainable situation.

Just leave it as it is - I think that’s a somewhat fair counter argument. EarthMC has been doing fine for years. I still think it’s important to identify issues and the problem described above is too large to neglect. There’s an inherent risk with introducing large gameplay changes and only time will tell if this is the correct move. I do believe the risk of neglecting the problem is greater than not doing anything. I’m not perfect though and things will probably need to be adjusted in the future to accommodate for gameplay issues that are not yet apparent.

## How we’re rolling out the overclaim feature
The overclaim system will be introduced 2024-01-01.  Introducing the change has its challenges of course, and we will do our best to make it right during a lengthy grace period. 

The grace period starts 2023-10-01 (this Sunday) and lasts until the overclaim system is launched. It’s important to have a grace period so that we’re able to make a smooth transition. Several things will happen during the grace period:
- Players will get a 100% refund when unclaiming chunks using /t unclaim. Unclaiming unused chunks can make sense to improve the town size/resident ratio. This also protects chunks that are more valuable to the town. After launch, there will be no claim refunds similar to how it has always been.
- When the grace period starts, claims per resident will increase from 8 to 16. The claims per resident number will go down -1 per month until it’s back at 8. This ensures that large and few resident towns are more protected from overclaim starting out and makes the transition to the advent of overclaim more graceful. 
- We have introduced changes to combat cheat clients that mass recruit townless residents. It’s important that all invites are deliberate so that normal towns have a fair chance of inviting residents. It’s also important for residents to get a proper introduction and a place to build, mass recruited residents don’t get this. Expect more work in this area moving forward.

