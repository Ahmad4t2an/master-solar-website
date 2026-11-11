// APNE PRODUCTS YAHAN EDIT KAREIN. Format: "Naam|Asal price|Discount %"
// Pictures: images/products/ folder mein product id ke naam se (jaise ac-1.jpg, tv-3.jpg). Na ho to placeholder dikhega.
const CATS={
solar:["Solar Panels","☀️",["Mono PERC half-cut cells","25 saal power warranty","Weather proof aluminium frame","High efficiency for Pakistan ki dhoop"],[
"Longi Hi-MO 580W Mono Panel|19500|10","Jinko Tiger Neo 575W Panel|19000|10","Canadian Solar 550W Panel|18000|8","JA Solar 575W Mono Panel|18800|9","Trina Solar 600W Panel|20500|10","Astronergy 550W Panel|17500|8","Risen 600W Mono Panel|20000|9","Longi 550W Mono Panel|18200|9","Jinko 620W Bifacial Panel|22000|10","Sunsole 450W Mono Panel|15000|7"]],
inv:["Inverters & Batteries","🔋",["Hybrid solar compatible","Over load & short circuit protection","Long backup time","Official warranty"],[
"Inverex Veyron 3kW Hybrid Inverter|135000|10","Knox 5kW Hybrid Solar Inverter|215000|10","Solis 6kW Hybrid Inverter|260000|8","Growatt 5kW Hybrid Inverter|235000|9","Homage 1.5kW Solar UPS|65000|10","Phoenix 200Ah Tubular Battery|52000|8","Osaka 200Ah Tubular Battery|50000|8","Exide 150Ah Deep Cycle Battery|42000|7","Lithium Battery 48V 5kWh|290000|10","Hybrid MPPT Charge Controller 60A|18000|10"]],
ac:["Air Conditioners","❄️",["Inverter technology, bijli ki bachat","Heat & Cool","Copper condenser","Official brand warranty"],[
"Haier 1 Ton Inverter AC|125000|10","Gree 1.5 Ton Inverter AC|168000|9","Dawlance 1.5 Ton Inverter AC|165000|10","PEL 1.5 Ton Inverter AC|152000|8","Orient 1.5 Ton Inverter AC|148000|9","TCL 1 Ton Inverter AC|108000|8","Kenwood 1.5 Ton Inverter AC|155000|10","Haier 2 Ton Inverter AC|235000|9","Gree 2 Ton Inverter AC|218000|8","Samsung 1.5 Ton Inverter AC|190000|7"]],
tv:["LED TV","📺",["Full HD / 4K display","Smart TV (Android/WebOS)","WiFi & YouTube","Official warranty"],[
"Samsung 43 inch Smart LED TV|89000|10","TCL 43 inch Android LED TV|58000|10","Haier 32 inch Smart LED TV|33000|8","Orient 55 inch 4K Smart LED|108000|9","Sony Bravia 50 inch 4K TV|155000|7","LG 55 inch 4K Smart TV|142000|8","Ecostar 40 inch LED TV|42000|10","Haier 55 inch 4K Android TV|98000|10","TCL 65 inch 4K Smart TV|165000|9","Samsung 32 inch LED TV|42000|8"]],
fr:["Refrigerators","🧊",["Low voltage protection","Inverter compressor options","Frost free / Direct cool","Official warranty"],[
"Dawlance 9170 Refrigerator|98000|8","Haier HRF-336 Refrigerator|108000|10","PEL InverterOn Refrigerator|128000|9","Orient Ice Refrigerator|88000|8","Samsung Double Door Fridge|195000|7","Haier 438 Side by Side|135000|10","Dawlance Chrome Fridge|82000|9","Kenwood Double Door Fridge|92000|10","Gree Inverter Refrigerator|118000|8","Singer Double Door Fridge|85000|9"]],
wm:["Washing Machines","🧺",["Powerful motor","Low water & power use","Rust proof body","Official warranty"],[
"Dawlance Twin Tub DW-6500|36000|8","Haier 8kg Top Load Washer|52000|10","Kenwood 8kg Twin Tub|34000|9","Super Asia Washing Machine|28000|7","Boss Twin Tub Washer|26000|8","Samsung 8kg Front Load|135000|8","LG 9kg Front Load Washer|158000|9","Orient Semi Auto Washer|32000|10","PEL Twin Tub Washer|33000|8","Haier 12kg Dryer Twin Tub|45000|10"]],
hob:["Kitchen Hob","🔥",["Auto ignition","Tempered glass top","Brass burners","Gas saving design"],[
"Nasgas 3 Burner Glass Hob|19000|10","Canon 4 Burner Hob|24000|9","Dawlance Built-in Hob|28000|8","Haier 3 Burner Hob|26000|10","Super Asia Gas Hob|17000|8","Gree 4 Burner Glass Hob|27000|9","Kenwood Built-in Hob|25000|10","Orient 3 Burner Hob|21000|7","PEL Kitchen Hob|23000|9","Hoover Gas Hob|29000|8"]],
cl:["Room Air Coolers","🌬️",["Honeycomb cooling pads","Low power consumption","Large water tank","Copper motor"],[
"Super Asia ECM-5000 Room Cooler|30000|10","Pak Fan Room Air Cooler|27000|8","Gaba National Room Cooler|26000|9","Boss Room Air Cooler|25000|8","Dawlance Room Cooler|35000|10","Nasgas Room Cooler|24000|9","Orient Room Cooler|32000|7","Sogo Room Air Cooler|23000|10","Ecostar Room Cooler|22000|8","Yamato Room Cooler|21000|9"]]
};
const PRODUCTS=[];
for(const k in CATS)CATS[k][3].forEach((s,i)=>{const[n,o,d]=s.split("|"),op=+o;PRODUCTS.push({id:k+"-"+(i+1),cat:k,name:n,old:op,off:+d,price:Math.round(op*(1-d/100)/100)*100})});
