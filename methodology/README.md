# {site title}



## What we build

The critical mapping project {site title}
compares the amount and location of open housing listings in Belgrade
with the subset of those listings that are suitable and affordable
for different households.

## Motivation

The goal of {site title} is to interrogate 
how different socio-economic strata of the population are affected 
by rising housing prices and gentrification in Belgrade. 
By selecting different scenarios or household size and income parameters, 
users can retrace the results of this investigation.

## Scope

Housing listings we were able to find on {listings platform}
for Belgrade

## Time frame

From {start date scraping} to {end date scraping}. 

## About us

{site title} is a collaboration of {…} 
as part of the [Critical Mapping in Municipalist Movements research project](https://cmmm.eu/) 

## Methodology

{site title} is realized via these steps:

1. We scrape listings data from {listings platform}
2. We geo-locate all listings we found. And we use the result to make a list of all locations that had listings.
3. For each locaction we count three values: 
   1. the _total_ amount of listings
   2. the amount of listings _suitable_ for a given household size
   3. the amount of listings that are _suitable **AND** affordable_ for a given household income.
4. Loading the generated data based on the selection of listings category, household size and household income.


### 1. Scrape listings data from {listings platform}

{description Robin}

### 2. Geo-locate all listings

{description Robin}

### 3. Calculate the sum of total, suitable and suitable-and-affordable listings per location

The CSV files we get from steps 1 & 2, we process with a JavaScript (actually we’re using TypeScript) script.

Technically the script is based on a set of three nested loops. 
- The first loop cylcles through the listing categories (**rent** and **purchase**) and reads in the data from the CSV.
   - The second loop cylcles through all possible combinations of household sizes and incomes and calculates the comparison thresholds for a _suitable_ listing size and _affordable_ listing price. This is based on the definitions and formulas described in the short glossary below.
     - At the third level we loop through all listings. We compare the actual listing size and price to the thresholds calculated at level 2. Based on the comparison we increase the counts for total, _suitable_, and _suitable-and-affordable_ listings at that listing’s location.
   - The counts from level three are written into a JSON-file (in a geojson format that is often used for mapping purposes) for each possible combination of household size and household income

### 4. Display on the website

When a _scenario_ is selected on the website:

- The JSON-file for that scenario is loaded. 
- The _reference visualization_ will display the _suitable_ count for each location. 
- And the _comparison visualization_ will display the _suitable-and-affordable_ count for each location.

## A short glossary

### (Data) scraping

(Data) scraping in our case refers to the process of procedually accessing sub-pages of website or online platform. 
Often the intent is to extract and store information available on the site 
in a more structured format for further analysis.

We scraped data from {listings platform}
for Belgrade
from {start date scraping} to {end date scraping}.

### Listing category

... or just _category_. We scrape data for listings that are offered for rent and purchase. 
We regard those as qualitatively different and analyze and visualize them separately.

### Suitable (listings)

We use the term _suitable_ to indicate that a listing (an apartment or a house) has an appropriate size for a household.
To calculate the appropriate size in m<sup>2</sup> we use the following forumula: 


```
suitable = minOfferSize + householdSize * factorSizePerPerson
```

Where 
- `minOfferSize` stands for a constant minimum size each listing should have. We set this constant to 20 m<sup>2</sup>.
- `householdSize` stands for the amount of people permanently living in the apartment (or house). And the 
- `factorSizePerPerson` describes the space needed for each person. We used 15 m<sup>2</sup> for this constant according to [{reference to suitable formula}](https://google.com)

### Affordable (listings)

Our definition of _affordable_ is based on the listing category. 

We consider a listing for **rent** as affordable if the monthly price in the listing is not higher than 30 % of the household income. ([{reference for affordable rent}](https://google.com))

We consider a listing for **purchase** as affordable if a loan of 30 years can be paid off with a mortgage that is not higher than 30 % of the household income. To caclulate the affordable purchase price we use an interest rate of 2.55 % and a down payment of 20 % of the price in the listing.


### Reference visualization
The _reference visualization_ (left or top position) initially shows 
**all** housing listings we were able to find. 
When a household size is selected, it shows only **suitable** (in terms of size) listings.

### Comparison visualization
The _comparison visualization_ (right or bottom position) only displays listings 
that are **suitable** as well as **affordable** (in terms of price)
for a selected household size and income.

### Scenario

We use the term _scenario_ to describe a possible set of the three selectable parameters on the website: listing category (rent or purchase), household size (people in the household) and household income (in € / month).