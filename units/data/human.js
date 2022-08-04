const human = [
    {
        'name': 'Infantry',
        'id': 1, 
        'tribe': 'human',
        'image': '0001',
        'stars': 1,
        'type': 'physical'
    },
    {
        'name': 'Senior Infantry',
        'id': 2, 
        'tribe': 'human',
        'image': '0002',
        'stars': 2,
        'type': 'physical'
    },
    {
        'name': 'Heavy Infantry',
        'id': 3, 
        'tribe': 'human',
        'image': '0003',
        'stars': 2,
        'type': 'physical'
    },
    {
        'name': 'Senior Heavy Infantry',
        'id': 4, 
        'tribe': 'human',
        'image': '0004',
        'stars': 3,
        'type': 'physical'
    },
    {
        'name': 'Fire Bird',
        'id': 5, 
        'tribe': 'human',
        'image': '0005',
        'stars': 2,
        'type': 'magical'
    },
    {
        'name': 'Senior Fire Bird',
        'id': 6, 
        'tribe': 'human',
        'image': '0006',
        'stars': 4,
        'type': 'magical'
    },
    {
        'name': 'Musketeer',
        'id': 7, 
        'tribe': 'human',
        'image': '0007',
        'stars': 3,
        'type': 'physical'
    },
    {
        'name': 'Senior Musketeer',
        'id': 8, 
        'tribe': 'human',
        'image': '0008',
        'stars': 4,
        'type': 'physical'
    },
    {
        'name': 'Hammer Knight',
        'id': 9, 
        'tribe': 'human',
        'image': '0009',
        'stars': 3,
        'type': 'magical'
    },
    {
        'name': 'Senior Hammer Knight',
        'id': 10, 
        'tribe': 'human',
        'image': '0010',
        'stars': 4,
        'type': 'magical'
    },
    {
        'name': 'Cavalry Knight',
        'id': 11, 
        'tribe': 'human',
        'image': '0011',
        'stars': 4,
        'type': 'physical'
    },
    {
        'name': 'Senior Cavalry Knight',
        'id': 12, 
        'tribe': 'human',
        'image': '0012',
        'stars': 5,
        'type': 'physical'
    },
    {
        'name': 'Golem',
        'id': 13, 
        'tribe': 'human',
        'image': '0013',
        'stars': 5,
        'type': 'physical'
    },
    {
        'name': 'Senior Golem',
        'id': 14, 
        'tribe': 'human',
        'image': '0014',
        'stars': 6,
        'type': 'physical'
    },
    {
        'name': 'Fire Mage',
        'id': 15, 
        'tribe': 'human',
        'image': '0015',
        'stars': 5,
        'type': 'magical'
    },
    {
        'name': 'Senior Fire Mage',
        'id': 16, 
        'tribe': 'human',
        'image': '0016',
        'stars': 6,
        'type': 'magical'
    },
    {
        'name': 'Gunner',
        'id': 17, 
        'tribe': 'human',
        'image': '0017',
        'stars': 5,
        'type': 'magical'
    },
    {
        'name': 'Senior Gunner',
        'id': 18, 
        'tribe': 'human',
        'image': '0018',
        'stars': 6,
        'type': 'magical'
    },
    {
        'name': 'Priest',
        'id': 94, 
        'tribe': 'human',
        'image': '0094',
        'stars': 5,
        'type': 'magical'
    },
    {
        'name': 'Senior Priest',
        'id': 95, 
        'tribe': 'human',
        'image': '0095',
        'stars': 6,
        'type': 'magical'
    },
    {
        'name': 'Aladdin',
        'id': 104, 
        'tribe': 'human',
        'image': '0104',
        'stars': 5,
        'type': 'physical'
    },
    {
        'name': 'Senior Aladdin',
        'id': 105, 
        'tribe': 'human',
        'image': '0105',
        'stars': 6,
        'type': 'physical'
    },
    {
        'name': 'Griffin Rider',
        'id': 110, 
        'tribe': 'human',
        'image': '0110',
        'stars': 5,
        'type': 'physical'
    },
    {
        'name': 'Senior Griffin Rider',
        'id': 111, 
        'tribe': 'human',
        'image': '0111',
        'stars': 6,
        'type': 'physical'
    },
    {
        'name': 'Hot-Blooded Xuanzang',
        'id': 116, 
        'tribe': 'human',
        'image': '0116',
        'stars': 5,
        'type': 'physical'
    },
    {
        'name': 'Senior Hot-Blooded Xuanzang',
        'id': 117, 
        'tribe': 'human',
        'image': '0117',
        'stars': 6,
        'type': 'physical'
    },
    {
        'name': 'Pilot',
        'id': 124, 
        'tribe': 'human',
        'image': '0124',
        'stars': 5,
        'type': 'physical'
    },
    {
        'name': 'Senior Pilot',
        'id': 125, 
        'tribe': 'human',
        'image': '0125',
        'stars': 6,
        'type': 'physical'
    },
    {
        'name': 'Steam Punk',
        'id': 134, 
        'tribe': 'human',
        'image': '0134',
        'stars': 5,
        'type': 'magical'
    },
    {
        'name': 'Senior Steam Punk',
        'id': 135, 
        'tribe': 'human',
        'image': '0135',
        'stars': 6,
        'type': 'magical'
    },
    {
        'name': 'Valkyrie',
        'id': 142, 
        'tribe': 'human',
        'image': '0142',
        'stars': 5,
        'type': 'physical'
    },
    {
        'name': 'Senior Valkyrie',
        'id': 143, 
        'tribe': 'human',
        'image': '0143',
        'stars': 6,
        'type': 'physical'
    },
    {
        'name': 'Flame Spirit',
        'id': 158, 
        'tribe': 'human',
        'image': '0158',
        'stars': 5,
        'type': 'magical'
    },
    {
        'name': 'Senior Flame Spirit',
        'id': 159, 
        'tribe': 'human',
        'image': '0159',
        'stars': 6,
        'type': 'magical'
    },
    {
        'name': 'Cleric',
        'id': 166, 
        'tribe': 'human',
        'image': '0166',
        'stars': 5,
        'type': 'magical'
    },
    {
        'name': 'Senior Cleric',
        'id': 167, 
        'tribe': 'human',
        'image': '0167',
        'stars': 6,
        'type': 'magical'
    },
    {
        'name': 'Winged Knight',
        'id': 174, 
        'tribe': 'human',
        'image': '0174',
        'stars': 5,
        'type': 'physical'
    },
    {
        'name': 'Senior Winged Knight',
        'id': 175, 
        'tribe': 'human',
        'image': '0175',
        'stars': 6,
        'type': 'physical'
    },
    {
        'name': 'Musketress',
        'id': 182, 
        'tribe': 'human',
        'image': '0182',
        'stars': 5,
        'type': 'magical'
    },
    {
        'name': 'Senior Musketress',
        'id': 183, 
        'tribe': 'human',
        'image': '0183',
        'stars': 6,
        'type': 'magical'
    },
    {
        'name': 'Crimson Hawk Rider',
        'id': 190, 
        'tribe': 'human',
        'image': '0190',
        'stars': 5,
        'type': 'physical'
    },
    {
        'name': 'Senior Crimson Hawk Rider',
        'id': 191, 
        'tribe': 'human',
        'image': '0191',
        'stars': 6,
        'type': 'physical'
    },
    {
        'name': 'Paladin',
        'id': 198, 
        'tribe': 'human',
        'image': '0198',
        'stars': 5,
        'type': 'magical'
    },
    {
        'name': 'Senior Paladin',
        'id': 199, 
        'tribe': 'human',
        'image': '0199',
        'stars': 6,
        'type': 'magical'
    },
    {
        'name': 'Sindbad',
        'id': 206, 
        'tribe': 'human',
        'image': '0206',
        'stars': 5,
        'type': 'magical'
    },
    {
        'name': 'Senior Sindbad',
        'id': 207, 
        'tribe': 'human',
        'image': '0207',
        'stars': 6,
        'type': 'magical'
    },
    {
        'name': 'Salamander Rider',
        'id': 214, 
        'tribe': 'human',
        'image': '0214',
        'stars': 5,
        'type': 'physical'
    },
    {
        'name': 'Senior Salamander Rider',
        'id': 215, 
        'tribe': 'human',
        'image': '0215',
        'stars': 6,
        'type': 'physical'
    },
    {
        'name': 'Fire Ranger',
        'id': 222, 
        'tribe': 'human',
        'image': '0222',
        'stars': 5,
        'type': 'magical'
    },
    {
        'name': 'Senior Fire Ranger',
        'id': 223, 
        'tribe': 'human',
        'image': '0223',
        'stars': 6,
        'type': 'magical'
    },
    {
        'name': 'Flame Sibyl',
        'id': 230, 
        'tribe': 'human',
        'image': '0230',
        'stars': 5,
        'type': 'magical'
    },
    {
        'name': 'Senior Flame Sibyl',
        'id': 231, 
        'tribe': 'human',
        'image': '0231',
        'stars': 6,
        'type': 'magical'
    },
    {
        'name': 'Extreme Fire Mage',
        'id': 238, 
        'tribe': 'human',
        'image': '0238',
        'stars': 7,
        'type': 'magical'
    },
    {
        'name': 'Extreme Gunner',
        'id': 242, 
        'tribe': 'human',
        'image': '0242',
        'stars': 7,
        'type': 'magical'
    },
    {
        'name': 'Senior Golem',
        'id': 246, 
        'tribe': 'human',
        'image': '0246',
        'stars': 7,
        'type': 'physical'
    },
    {
        'name': 'Extreme Hot-Blooded Xuanzang',
        'id': 293, 
        'tribe': 'human',
        'image': '293',
        'stars': 7,
        'type': 'physical'
    },
    {
        'name': 'Extreme Aladdin',
        'id': 269, 
        'tribe': 'human',
        'image': '269',
        'stars': 7,
        'type': 'physical'
    },
    {
        'name': 'Atlantia',
        'id': 250, 
        'tribe': 'human',
        'image': '981_UI_UNIT_ICONS0250',
        'stars': 5,
        'type': 'physical'
    },
    {
        'name': 'Senior Atlantia',
        'id': 251, 
        'tribe': 'human',
        'image': '982_UI_UNIT_ICONS0251',
        'stars': 6,
        'type': 'physical'
    },
    {
        'name': 'Extreme Priest',
        'id': 258, 
        'tribe': 'human',
        'image': '1050_UI_UNIT_ICONS0258',
        'stars': 7,
        'type': 'magical'
    },
    {
        'name': 'Rose Chevalier',
        'id': 261, 
        'tribe': 'human',
        'image': '1061_UI_UNIT_ICONS0261',
        'stars': 5,
        'type': 'physical'
    },
    {
        'name': 'Senior Rose Chevalier',
        'id': 262, 
        'tribe': 'human',
        'image': '1062_UI_UNIT_ICONS0262',
        'stars': 6,
        'type': 'physical'
    },
    {
        'name': 'Engineer',
        'id': 273, 
        'tribe': 'human',
        'image': '1113_UI_UNIT_ICONS0273',
        'stars': 5,
        'type': 'magical'
    },
    {
        'name': 'Senior Engineer',
        'id': 274, 
        'tribe': 'human',
        'image': '1114_UI_UNIT_ICONS0274',
        'stars': 6,
        'type': 'magical'
    },
    {
        'name': 'Extreme Griffin Rider',
        'id': 281, 
        'tribe': 'human',
        'image': '1174_UI_UNIT_ICONS0281',
        'stars': 7,
        'type': 'physical'
    },
    {
        'name': 'Machine Gunner',
        'id': 285, 
        'tribe': 'human',
        'image': '1210_UI_UNIT_ICONS0285',
        'stars': 5,
        'type': 'physical'
    },
    {
        'name': 'Senior Machine Gunner',
        'id': 286, 
        'tribe': 'human',
        'image': '1211_UI_UNIT_ICONS0286',
        'stars': 6,
        'type': 'physical'
    },
    {
        'name': 'Ancient Flame Dragon Knight',
        'id': 9996, 
        'tribe': 'human',
        'image': 'd0001',
        'stars': 8,
        'type': 'physical'
    }
]