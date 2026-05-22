export default async function handler(req, res) {

    try {

        const response = await fetch(
            "https://api.crime.life/online/players"
        );

        const data = await response.json();

        res.status(200).json(data);

    } catch (err) {

        res.status(500).json({
            error: "erro ao buscar api"
        });

    }

}