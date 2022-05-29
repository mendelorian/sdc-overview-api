# Overview API

The Overview API services an inherited front-end online shopping portal, defining routes to help the front-end display product information, photos, and styles.

## Description

The Overview API consists of three endpoints which interact with a PostgreSQL database containing large amounts of data (largest table containing over 11 million rows).  
The endpoints get all products, a specific product, or the styles of a specific product.  The API is designed to be performant for large volumes of concurrent users.
In addition, given the large dataset, performance optimization was a key focus in the design of the API from the very beginning.

## Technologies
<p>
<img alt="Javascript" src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" />
<img alt="Nodejs" src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
<img alt="Express" src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />
<img alt="PostgreSQL" src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" />
<img alt="Redis" src="https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=Redis&logoColor=white" />
<img alt="NGINX" src="https://img.shields.io/badge/NGINX-009639?style=for-the-badge&logo=NGINX&logoColor=white" />
<img alt="Jest" src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white" />
<img alt="AWS" src="https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white" />
<p/>

## Installation
You can install [node](https://docs.npmjs.com/cli/v8/configuring-npm/install) and use [npm](https://docs.npmjs.com/cli/v8/configuring-npm/install) to install the dependencies.
Navigate to the project's root directory.

```bash
npm install
```

## Usage
The following example uses axios to call the API.
```javascript
axios.get('http://localhost:3000/products/153')
      .then((results) => {
        console.log(results.data)
      });
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
