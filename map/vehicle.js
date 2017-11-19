var MRT = [
  {lat: 22.56481191, lng: 120.3538521},
  {lat: 22.57011232, lng: 120.3421469},
  {lat: 22.58035095, lng: 120.3284408},
  {lat: 22.58853833, lng: 120.3219713},
  {lat: 22.59683914, lng: 120.3151478},
  {lat: 22.60583276, lng: 120.307702},
  {lat: 22.61383541, lng: 120.3046764},
  {lat: 22.6245709, lng: 120.3006424},
  {lat: 22.631386, lng: 120.301951},
  {lat: 22.63966255, lng: 120.3027023},
  {lat: 22.64829692, lng: 120.3033675},
  {lat: 22.65718817, lng: 120.3030886},
  {lat: 22.66657386, lng: 120.3028955},
  {lat: 22.67681026, lng: 120.3066935},
  {lat: 22.68801596, lng: 120.3095473},
  {lat: 22.70217026, lng: 120.3025307},
  {lat: 22.70848479, lng: 120.3023161},
  {lat: 22.71863888, lng: 120.3072728},
  {lat: 22.72291407, lng: 120.3163923},
  {lat: 22.72932659, lng: 120.3210486},
  {lat: 22.74466397, lng: 120.3177012},
  {lat: 22.75339067, lng: 120.3146113},
  {lat: 22.76045473, lng: 120.310985},
  {lat: 22.78058, lng: 120.30165},
  {lat: 22.62154049, lng: 120.2745284},
  {lat: 22.62350135, lng: 120.2837767},
  {lat: 22.62898766, lng: 120.2949347},
  {lat: 22.631386, lng: 120.301951},
  {lat: 22.63073055, lng: 120.3116502},
  {lat: 22.63039386, lng: 120.3174438},
  {lat: 22.62952241, lng: 120.3277005},
  {lat: 22.62722493, lng: 120.3346313},
  {lat: 22.62508586, lng: 120.3410901},
  {lat: 22.62530373, lng: 120.3483428},
  {lat: 22.62597715, lng: 120.3553595},
  {lat: 22.62538296, lng: 120.3632344},
  {lat: 22.6248878, lng: 120.3724827},
  {lat: 22.62239218, lng: 120.389799},
  {lat: 22.631386, lng: 120.301951},
];

var light = [
  {lat: 22.60462542, lng: 120.3246505},
  {lat: 22.59953285, lng: 120.3197994},
  {lat: 22.5955033, lng: 120.3153684},
  {lat: 22.59365581, lng: 120.3105168},
  {lat: 22.59488605, lng: 120.305004},
  {lat: 22.60096112, lng: 120.3026595},
  {lat: 22.60568425, lng: 120.3008317},
  {lat: 22.6101334, lng: 120.2980221},
  {lat: 22.61164344, lng: 120.2934382},
  {lat: 22.61680492, lng: 120.2932342},
  {lat: 22.61931532, lng: 120.2894657},
  {lat: 22.61856162, lng: 120.284204},
  {lat: 22.6204995, lng: 120.2799235},
  {lat: 22.62161748, lng: 120.2758491},
];

function addicon(map_obj){
  for (var index = 0; index < MRT.length; index++) {
          var tmp = new google.maps.Marker({
              position: MRT[index],
              map: map_obj,
              title: 'Hello World!',
              icon : {
                url: './mrt3.png',
                size: new google.maps.Size(45, 45),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(0, 20),
                scaledSize: new google.maps.Size(30, 30),
                labelOrigin: new google.maps.Point(9, 8)
              }
          });
  }
  for (var index = 0; index < light.length; index++) {
          var tmp = new google.maps.Marker({
              position: light[index],
              map: map_obj,
              title: 'Hello World!',
              icon : {
                url: './light2.png',
                size: new google.maps.Size(45, 45),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(0, 20),
                scaledSize: new google.maps.Size(25, 25),
                labelOrigin: new google.maps.Point(9, 8)
              }
          });
  }
}