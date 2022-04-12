---
title: 'Next.js, GraphQL - a bug tracker'
excerpt: 'A quick rundown of my current project, a bug tracking app using graphql'
date: '2022-04-12T09:55:35.878Z'
tags: [Fullstack,GraphQL,Docker]
---

I decided to try keeping an active journal, documenting the development of my next project: a bug tracker. A name is in the works, for now, let’s just call it ‘bugtrackr’.

So to start, I kind of already started this project... a while ago, in fact, the backend is all but done—in its basic form, at least—and the frontend...well, let’s say I got stuck.

Let’s take a quick look at the backend, I’ll cover it in more detail in a future post, for now, what you need to know is that the server is fueled by apollo-express, Prisma, and docker.

Now, what does any of that mean?

apollo is the foremost platform for all things GraphQL, if you’ve been a developer for at least a while and frequent tutorials and discussions, you might also know that they have been making some unpopular choices as of late, and are kind of dropping in popularity. To which I say, whatever.

Honestly, that’s neither here nor there, I’d describe myself as a growing beginner with GraphQL and the ecosystem can be kinda messy. Apollos’ main advantage is simple: it’s been around the longest, it has a lot of support, community discussion, solid documentation, and both a server and front-end client library. If I’m not mistaken quite a few other libraries are built upon Apollos server so there’s that. However by no means do I think it’s the only way to go, in fact, I’d argue that for a beginner/starter project something like graphql-yoga is more approachable(and still supports stuff like subscriptions, etc).

apollo-express: this is where the magic happens, Apollos’ complete library for nodejs development, you may be wondering what express has to do with it? after all, express is for REST APIs, well this library builds on a lot of features already built in to express—like middlewares—which makes life easier if you have any background developing with it(which you probably do, who doesn’t use express).

Prisma: a new-fangled ORM, I quite like it, its quite intuitive and easy to use and has lots of dope features, and a pretty neat schema definition language, though I’d say its complexity lies in its modernity, constant updates and changes are good, but they also mean that stuff from a blog post 3 months ago may no longer apply, and you’re never sure what’ll work and break your app. But I think its a worthy trade, and I’d say it’s my go-to for a backend with SQL. Speaking of:

Docker: This is one of those things that makes me wish I knew docker earlier on, you can run a local instance of Postgres database with a simple docker-compose file, meaning you can avoid the messy, dated-feeling tools of most proprietary SQL tools. When I first started I used MySQL, and just the installation process made me feel like I was back in 2002. docker lets you trim a lot of fat and jump into the development of what really matters much quicker.

So that covers the ‘gist’ of the backend, as I mention earlier I’ll dive deeper into it in future posts.

A quick note on the front-end of things, I decided to go with next.js, apollos client, and styled-components for this. Why?

next.js rules, for basically any kind of react development, and while an app like this probably won’t benefit from its SSR and ISR features, its still offers the best developer experience, so I’m sticking with it.

styled-components: can I be honest for a second? this project has been in the works for a while, and a front already technically exists, built with chakra-ui, but I ended up getting disheartened and kind of lost motivation for a while, I think the reason being is that while chakra-ui is definitely sleek and offer a lot of really good features, I am very much a visual person, and I like having a lot of control over my front-end. What I’m trying to say is that chakra-ui is great, its just not the right fit for me, I like immersing myself in nitpicks sometimes, it keeps me engaged in my project, and its a learning process, I’ll never improve my UI/UX or CSS skills without getting into the nitty-gritty and getting my hands dirty.

apollo: remember how earlier I said apollo has been getting flak for some of its choices, well from what I gather that’s directed more towards its client than its server. But again, as I said earlier, the sheer amount of information, documentation, tutorials, and support available for it make it a really good pick for a beginner, especially if you’re using its server.

So this has been a quick rundown of this project. for now, it exists solely as git repos, but hopefully, this journaling will help keep me motivated and updating, and soon there’ll be a live demo available.
