# roderod
A useless little programming language

## Installation
`npm install roderod`
If you want to install the CLI - `npm install -g roderod`
`roderod helloworld.rr`

### Hello World!
```roderod
log->Hello World!
```

#### A Syntax Guide
Every part of a function is split with a `->`, the first part being the function you want to call, the other parts being the parameters.

##### Functions
 - `log` allows you to print the parameters. You can use `{loc}` and `{val}` to print the location of the data and the value of the data
 - `set` allows you to set the data at the current location
 - `up` adds to your location dependending on the parameter
 - `down` subtracts from your location dependending on the parameter
 - `move` sets your location