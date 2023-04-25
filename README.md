# Space Check

This is a simple web server built with Node.js and Express that checks the available space on the hard drive and returns a plain text response indicating whether the amount of space available is greater than a specified threshold.

## Installation

To install this application, clone the repository and run `npm install` to install the required dependencies:

```
git clone https://github.com/rootedbox/space-check.git
cd space-check
npm install
```

## Usage

To start the server, run the following command:

```
npm start
```

By default, the server will run on port 3000. You can configure the port and the amount of free space required by creating a `.env` file in the root of your project and setting the following variables:

```
PORT=3000
THRESHOLD=1000000000
```

In this example, the server will run on port 3000 and require at least 1 GB of free space on the hard drive.

Once the server is running, you can make a GET request to the root path (`/`) to check the amount of free space. The server will respond with a plain text response indicating whether the amount of space available is greater than or equal to the specified threshold.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
