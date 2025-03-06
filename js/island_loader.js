const island_files = [
    "aestrin/eastwind_0",
    "aestrin/eastwind_1",
    "aestrin/fort_aestrin_0",
    "aestrin/fort_aestrin_1",
    "aestrin/mount_malefic",
    "aestrin/oracle",
    "aestrin/rock_of_despair",
    "aestrin/siren_song",
    "aestrin/sunspire_0",
    "aestrin/sunspire_1",
    "aestrin/cities/eastwind_city",
    "aestrin/cities/fort_aestrin_city_0",
    "aestrin/cities/fort_aestrin_city_1",
    "aestrin/cities/mount_malefic_city",
    "aestrin/cities/siren_song_city",
    "aestrin/cities/sunspire_city",
    "aestrin/rocks/fort_aestrin_rocks",
    "aestrin/rocks/siren_song_rocks",

    "alankh/alankh_academy",
    "alankh/albacore_town_0",
    "alankh/albacore_town_1",
    "alankh/alchemists_island_0",
    "alankh/alchemists_island_1",
    "alankh/alnilem",
    "alankh/eleann_island",
    "alankh/gold_rock_city_0",
    "alankh/gold_rock_city_1",
    "alankh/gold_rock_city_2",
    "alankh/isle_of_clear_mind",
    "alankh/lions_fang",
    "alankh/neverdin",
    "alankh/oasis",
    "alankh/cities/alankh_academy_city",
    "alankh/cities/albacore_town_city",
    "alankh/cities/alchemists_island_city",
    "alankh/cities/alnilem_city",
    "alankh/cities/eleann_island_city",
    "alankh/cities/gold_rock_city_city",
    "alankh/cities/neverdin_city",
    "alankh/cities/oasis_city_0",
    "alankh/cities/oasis_city_1",
    "alankh/rocks/alnilem_rock_0",
    "alankh/rocks/alnilem_rock_1",
    "alankh/rocks/eleann_island_rock",
    "alankh/rocks/gold_rock_city_rock_0",
    "alankh/rocks/gold_rock_city_rock_1",
    "alankh/rocks/oasis_rock",

    "bay/happy_bay_0",
    "bay/happy_bay_1",
    "bay/happy_bay_city",

    "chronos/chronos",
    "chronos/chronos_city",
    "chronos/chronos_rock",

    "emerald/crab_beach",
    "emerald/dragon_cliffs",
    "emerald/new_port",
    "emerald/sage_hills",
    "emerald/sanctuary",
    "emerald/serpent_isle_0",
    "emerald/serpent_isle_1",
    "emerald/cities/crab_beach_city",
    "emerald/cities/dragon_cliffs_city",
    "emerald/cities/new_port_city",
    "emerald/cities/sage_hills_city",
    "emerald/cities/sanctuary_city",
    "emerald/cities/serpent_isle_city",
    "emerald/rocks/dragon_cliffs_rock",
    "emerald/rocks/serpent_isle_rock",

    "firefish/fire_fish_islands",
    "firefish/fire_fish_town",
    "firefish/kicia_bay",
    "firefish/onna",
    "firefish/senna",
    "firefish/cities/kicia_fire_fish_town_city",
    "firefish/cities/senna_onna_city",
    "firefish/rocks/firefish_rock",
]

let islands = [

]

let islands_secrets = [

]

// was used to turn the polygon_definitions.js into separete files and download them
// used jszip for this
// function polygon_to_string() {
//     const zip = new JSZip();

//     let i =0;

//     geoJson.features.forEach(feature => {
//         const islandObj = { "region": "", "name": "", "type": "Polygon", "coordinates": [], "secret": false };
//         islandObj.type = feature.geometry.type
//         islandObj.coordinates = feature.geometry.coordinates
//         islandObj.region = feature.properties.Region
//         islandObj.name = feature.properties.Name
//         if (islandObj.name === undefined)
//             islandObj.name = "";

//         let fileName = (islandObj.name.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, "").replace(" ", "_").toLowerCase());

//         if (fileName === "") {
//             fileName += "idk_";
//         }

//         fileName+=i
//         i++

//         const blob = new Blob([JSON.stringify(islandObj)], { type: "text/json" });

//         zip.file(`islands_${fileName}.json`, blob);

//         // const fileURL = URL.createObjectURL(blob);

//         // const downloadLink=document.createElement("a");
//         // downloadLink.href = fileURL;
//         // downloadLink.download = `islands_${fileName}.json`;
//         // document.body.appendChild(downloadLink);
//         // downloadLink.click();

//         // URL.revokeObjectURL(fileURL);
//     });

//     secretJson.features.forEach(feature => {
//         const islandObj = { "region": "", "name": "", "type": "Polygon", "coordinates": [], "secret": true };
//         islandObj.type = feature.geometry.type
//         islandObj.coordinates = feature.geometry.coordinates
//         islandObj.region = feature.properties.Region
//         islandObj.name = feature.properties.Name
//         if (islandObj.name === undefined)
//             islandObj.name = "";

//         let fileName = (islandObj.name.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, "").replace(" ", "_").toLowerCase());

//         if (fileName === "") {
//             fileName += "idk_";
//         }

//         fileName+=i
//         i++

//         const blob = new Blob([JSON.stringify(islandObj)], { type: "text/json" });

//         zip.file(`islands_${fileName}.json`, blob);

//         // const fileURL = URL.createObjectURL(blob);

//         // const downloadLink=document.createElement("a");
//         // downloadLink.href = fileURL;
//         // downloadLink.download = `islands_${fileName}.json`;
//         // document.body.appendChild(downloadLink);
//         // downloadLink.click();

//         // URL.revokeObjectURL(fileURL);
//     });

//     zip.generateAsync({
//         type: "blob",
//         streamFiles: true
//     }).then(zipData => {
//         const link = document.createElement('a');
//         link.href = window.URL.createObjectURL(zipData);
//         link.download = `islands.zip`
//         link.click();
//     });
// }

async function load_islands() {
    const island_path = "assets/islands";
    for (let index = 0; index < island_files.length; index++) {
        const island_file = island_files[index];
        try {
            const data = await fetchJSON(island_path + "/" + island_file + ".json");
            if (data.type === undefined)
                data.type = "Polygon";
            if (data.secret === undefined || !data.secret)
                islands.push(data);
            else
                islands_secrets.push(data);
        }
        catch (error) {
            console.error(error);
        }
    }

    islands.sort((a, b) => {
        if (a.region.toLowerCase() === "city") return 1;
        if (b.region.toLowerCase() === "city") return -1;
        if (a.region.toLowerCase() === "rock") return 1;
        if (b.region.toLowerCase() === "rock") return -1;
        return 0;
    });
}

function island_template_json(island_list) {
    let jsonText = '{"type": "FeatureCollection",\n' +
        '"features": [\n';

    island_list.forEach(island => {
        const featureObj = {
            "type": "Feature",
            "geometry": {
                "type": island.type,
                "coordinates": island.coordinates
            },
            "properties": {
                "Region": island.region,
                "Name": island.name
            }
        }

        jsonText += JSON.stringify(featureObj) + ","
    });

    jsonText = jsonText.slice(0, -1);

    jsonText += "]}";

    return jsonText;
}

function islands_data_to_json() {
    return island_template_json(islands);
}

function islands_secrets_data_to_json() {
    return island_template_json(islands_secrets);
}