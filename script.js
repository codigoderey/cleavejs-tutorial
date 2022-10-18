new Cleave(".input-credito", {
	creditCard: true,
	onCreditCardTypeChanged: function (type) {
		console.log(type);
	}
});

new Cleave(".input-telefono", {
	phone: true,
	phoneRegionCode: "US"
});

new Cleave(".date-1", {
	date: true,
	delimiter: "-",
	datePattern: ["m", "d", "Y"]
});

new Cleave(".date-2", {
	date: true,
	delimiter: "/",
	datePattern: ["m", "Y"]
});

new Cleave(".time-1", {
	time: true,
	timePattern: ["h", "m", "s"]
});

new Cleave(".time-2", {
	time: true,
	timePattern: ["h", "m"]
});

new Cleave(".personalizado", {
	blocks: [3, 8, 8],
	delimiter: "-",
	prefix: "XXX",
	uppercase: true
});
