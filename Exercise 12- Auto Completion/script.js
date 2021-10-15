$( function()
    {
        const availableTags = [
            "Apple",
            "Banane",
            "Strawberry",
            "Cherry",
            "Phone",
            "Refrigerator",
            "Microwave",
            "Pencil",
            "Cat",
            "Dog",
            "Tshirt",
            "Jacket",
            "Short",
            "Shoes",
            "Leather",
            "Wallet",
            "Scissors",
            "Wallnut",
            "Nuts",
            "Marmelade",
            "Headset"
        ];
        $( "#tags" ).autocomplete({
            source: availableTags
        });
        console.log(availableTags);
    });