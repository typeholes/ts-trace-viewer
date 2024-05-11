# TS Trace Viewer

A tool for interacting with tsc performance traces.

https://marketplace.visualstudio.com/items?itemName=TypeHoles.ts-trace-viewer


## Working Features

1. Load and display some information from a tsc trace file
2. In editor warnings for check times from the trace that exceed a configurable threshold
  a. Interface isn't great yet.  Follow the video tutorial.



https://github.com/typeholes/ts-trace-viewer/assets/84949734/a617e5d1-7d0c-4079-a444-09d831413498



## Current Status

1. It is in the very early prototyping phase, so features are limited
2. I do have a patched tsc version with some additional data and an extension that shows the duration and type declaration of the top 10 check times.
3. First goal is to publish the source by 5/13/2024 so people can experiment with it and we can drill down on what data/calculations are most helpful
   a. Note that this will be mostly a UI push and the data may not be particularly helpful yet
4. Further goals TBD,

## The plan

1. Add data to the performance traces to allow association type checking durations with the types involved
   a. Currently this relies on a custom patched version of tsc
   b. A PR will be submitted once the concept is proven and all needed data is known
   c. failing acceptance of the PR, You can build it yourself and I will add a feature to TS Version Switcher to pull and build for you
2. Add a view in a vscode code extension to display and provide interactivity for the performance traces
   a. Display results for type check times of expressions and total times per type
   b. Sorting, filtering, and all the usual stuff
   c. Ability to navigate to expressions or types directly from the view
   d. Most likely a custom web view as tree views are too limiting and would likely have poor UX
3. Command line utility to summarize results and show top offenders



https://github.com/typeholes/ts-trace-viewer/assets/84949734/0b8caa82-c4c2-414b-8189-4a7a4241e39e

