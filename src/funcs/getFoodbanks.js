export async function getFoodBanks() {
    const response = await fetch('http://localhost:3000/foodbanks');
    const data = await response.json(response);
    console.log(data.payload);
    return data.payload;
}
