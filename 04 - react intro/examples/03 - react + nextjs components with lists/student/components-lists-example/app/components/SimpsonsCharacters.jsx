const SIMPSON_CHARACTERS = [
    "Homer Simpson",
    "Bart Simpson",
    "Marge Simpson",
    "Mr. Burns",
    "Lisa Simpson",
    "Apu Nahasapeemapetilon",
    "Sideshow Bob",
    "Milhouse Van Houten",
    "Ned Flanders",
]

export default function SimpsonsCharacters() {
    return <ul>
        {SIMPSON_CHARACTERS.map(
            // addding the 'index' term built in will preserve the array index of eahc element under the good
            // which we can eventually use to refer to a specific rendered element
            (characterName, index) => {
                return <li key={index}>{characterName}</li>
            }
        )
    }
    </ul>
}