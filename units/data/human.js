const human = [
    {
        'name': 'Infantry',
        'id': 1, 
        'tribe': 'human',
        'image': '0001',
        'stars': 1,
        'type': 'physical',
        'fullArt': '2',
        'sex': 'male',
        'airAttack': false,
        'cloakingDetection': false,
        'specialUnit': 0,
        'details': {
            'baseAttack': 16,
            'baseHP': 84,
            'basePhysicalDefense': 3.6,
            'baseMagicalDefense': 3.15,
            'attackSpeed': 60,
            'attackRange': 25,
            'movementSpeed': 11.20,
            'criticalRate': 20,
            'criticalDamage': 50.0,
            'respawnTime': 150,
            'evolutions': [1, 2],
            'pet': null,
            'battle': [
                'Normal Attack: Melee Physical Attack',
                'Skill Attack: Strike enemies with 1.5 enhanced attack power and stun enemies for a certain amount of time'
            ],
            'specialAbility': ['None'],
            'tribeSkill': 'None (only eveolved units can have tribute skills)'
        },
        'skills': [
            {
                'level': 25,
                'skill': 'Own HP Increased: 33%',
            },
            {
                'level': 50,
                'skill': 'Own Defense Power Increased: 20%',
            },
            {
                'level': 100,
                'skill': "One's(Own) Tribe's Movement Speed Increased: 1%",
            },
            {
                'level': 200,
                'skill': 'Own Attack Power Increased: 16%',
            },
            {
                'level': 300,
                'skill': 'Own HP Increased: 33%',
            },
            {
                'level': 500,
                'skill': 'Own HP Increased: 33%',
            },
            {
                'level': 700,
                'skill': 'Own Defense Power Increased: 20%',
            },
            {
                'level': 900,
                'skill': 'Own HP Increased: 33%',
            },
            {
                'level': 1100,
                'skill': 'Own HP Increased: 100%'
            }
        ],
        'equipment': []
    },
    {
        'name': 'Senior Infantry',
        'id': 2, 
        'tribe': 'human',
        'image': '0002',
        'stars': 2,
        'type': 'physical',
        'fullArt': '2',
        'sex': 'male',
        'airAttack': false,
        'cloakingDetection': false,
        'specialUnit': 0,
        'details': {
            'baseAttack': 24,
            'baseHP': 132,
            'basePhysicalDefense': 6,
            'baseMagicalDefense': 5.25,
            'attackSpeed': 60,
            'attackRange': 25,
            'movementSpeed': 11.20,
            'criticalRate': 20,
            'criticalDamage': 50.0,
            'respawnTime': 150,
            'evolutions': [1, 2],
            'pet': 1,
            'battle': [
                'Normal Attack: Melee Physical Attack',
                'Skill Attack: Strike enemies with 2 enhanced attack power and stun enemies for a certain amount of time',
                'Never gets knocked back. '
            ],
            'specialAbility': ['None'],
            'tribeSkill': 'Human Tribe Skill: A covenant between Human units and the Earth Spirit that grants immunity to knock-back attacks. (Immune to knock-back)'
        },
        'skills': [
            {
                'level': 25,
                'skill': 'Own HP Increased: 40%',
            },
            {
                'level': 50,
                'skill': 'Own Defense Power Increased: 24%',
            },
            {
                'level': 100,
                'skill': "One's(Own) Tribe's Movement Speed Increased: 2%",
            },
            {
                'level': 200,
                'skill': 'Own Attack Power Increased: 20%',
            },
            {
                'level': 300,
                'skill': 'Own HP Increased: 40%',
            },
            {
                'level': 500,
                'skill': 'Own HP Increased: 40%',
            },
            {
                'level': 700,
                'skill': 'Own Defense Power Increased: 24%',
            },
            {
                'level': 900,
                'skill': 'Own HP Increased: 40%',
            },
            {
                'level': 1100,
                'skill': 'Own HP Increased: 200%',
            },
            {
                'level': 1200,
                'skill': 'Own Defense Power Increased: 200%',
            },
            {
                'level': 1300,
                'skill': 'Own HP Increased: 300%',
            },
            {
                'level': 1400,
                'skill': 'Own Defense Power Increased: 400%',
            },
            {
                'level': 1500,
                'skill': "One's(Own) Tribue's HP Increased: 2a%"
            }
        ],
        'equipment': []
    },
    {
        'name': 'Heavy Infantry',
        'id': 3, 
        'tribe': 'human',
        'image': '0003',
        'stars': 2,
        'type': 'physical',
        'fullArt': '4',
        'sex': 'male',
        'airAttack': false,
        'cloakingDetection': false,
        'specialUnit': 0,
        'details': {
            'baseAttack': 10,
            'baseHP': 140.4,
            'basePhysicalDefense': 9,
            'baseMagicalDefense': 7.9,
            'attackSpeed': 60,
            'attackRange': 30,
            'movementSpeed': 11.20,
            'criticalRate': 20,
            'criticalDamage': 50.0,
            'respawnTime': 150,
            'evolutions': [3, 4],
            'pet': null,
            'battle': [
                'Normal Attack: Melee Physical Attack',
                'Skill Attack: Strke enemies and create shield for a certain amount of time (defend 99% of physical and magic damages)',
            ],
            'specialAbility': ['None'],
            'tribeSkill': 'None (only evolved units can have tribe skills)'
        },
        'skills': [
            {
                'level': 25,
                'skill': 'Own Defense Power Increased: 22%',
            },
            {
                'level': 50,
                'skill': 'Gold Gain Increase during the battle: 21%',
            },
            {
                'level': 100,
                'skill': 'Own HP Increased: 36%',
            },
            {
                'level': 200,
                'skill': 'Own Defense Power Increased: 22%',
            },
            {
                'level': 300,
                'skill': 'Quest Gold Increased: 21%',
            },
            {
                'level': 500,
                'skill': "Melee unit's Defense Power Increased: 5%",
            },
            {
                'level': 700,
                'skill': 'A chance to block melee attack increased: 2%',
            },
            {
                'level': 900,
                'skill': 'Own HP Increased: 36%',
            },
            {
                'level': 1100,
                'skill': 'Own Defense Power Increased: 100%',
            },
            {
                'level': 1200,
                'skill': 'Own HP Increased: 200%',
            }
        ],
        'equipment': []
    },
    {
        'name': 'Senior Heavy Infantry',
        'id': 4, 
        'tribe': 'human',
        'image': '0004',
        'stars': 3,
        'type': 'physical',
        'fullArt': '4',
        'sex': 'male',
        'airAttack': false,
        'cloakingDetection': false,
        'specialUnit': 0,
        'details': {
            'baseAttack': 14,
            'baseHP': 202.8,
            'basePhysicalDefense': 16.2,
            'baseMagicalDefense': 14.22,
            'attackSpeed': 60,
            'attackRange': 30,
            'movementSpeed': 11.20,
            'criticalRate': 20,
            'criticalDamage': 50.0,
            'respawnTime': 150,
            'evolutions': [3, 4],
            'pet': 2,
            'battle': [
                'Normal Attack: Melee Physical Attack',
                'Skill Attack: Strike enemies and create shield for a certain amount of time (defend 99% of physical and magic damages)',
                'Never gets knocked back. '
            ],
            'specialAbility': ['None'],
            'tribeSkill': 'Human Tribe Skill: A covenant between Human units and the Earth Spirit that grants immunity to knock-back attacks. (Immune to knock-back)'
        },
        'skills': [
            {
                'level': 25,
                'skill': 'Own Defense Power Increased: 26%',
            },
            {
                'level': 50,
                'skill': 'Gold Gain Increase during the battle: 23%',
            },
            {
                'level': 100,
                'skill': 'Own HP Increased: 43%',
            },
            {
                'level': 200,
                'skill': 'Own Defense Power Increased: 26%',
            },
            {
                'level': 300,
                'skill': 'Quest Gold Increased: 23%',
            },
            {
                'level': 500,
                'skill': "Melee unit's Defense Power Increased: 10%",
            },
            {
                'level': 700,
                'skill': 'A chance to block melee attack increased: 4%',
            },
            {
                'level': 900,
                'skill': 'Own HP Increased: 43%',
            },
            {
                'level': 1100,
                'skill': 'Own Defense Power Increased: 200%',
            },
            {
                'level': 1200,
                'skill': 'Own HP Increased: 300%',
            },
            {
                'level': 1300,
                'skill': "Melee units' Defense Power Increased: 200%",
            },
            {
                'level': 1400,
                'skill': 'Own HP Increased: 500%',
            },
            {
                'level': 1500,
                'skill': "Own HP Increased: 3a%"
            },
            {
                'level': 1600,
                'skill': "Melee units' Defense Power Increased: 2a%"
            }
        ],
        'equipment': []
    },
    {
        'name': 'Fire Bird',
        'id': 5, 
        'tribe': 'human',
        'image': '0005',
        'stars': 2,
        'type': 'magical',
        'fullArt': '6',
        'sex': 'neutral',
        'airAttack': true,
        'cloakingDetection': true,
        'specialUnit': 0,
        'details': {
            'baseAttack': 16.5,
            'baseHP': 48,
            'basePhysicalDefense': 1.8,
            'baseMagicalDefense': 2.2,
            'attackSpeed': 65,
            'attackRange': 180,
            'movementSpeed': 12.00,
            'criticalRate': 20,
            'criticalDamage': 50.0,
            'respawnTime': 150,
            'evolutions': [5, 6],
            'pet': null,
            'battle': [
                'Normal Attack: Ranged Magical Attack',
                'Skill Attack: Strike enemies with 2.5 times enhanced attack power and stun enemies for a certain amount of time',
                'Never gets blown away. ',
            ],
            'specialAbility': ['None'],
            'tribeSkill': 'None (only evolved units can have tribe skills)'
        },
        'skills': [
            {
                'level': 25,
                'skill': 'Own Attack Power Increased: 18%',
            },
            {
                'level': 50,
                'skill': 'Quest Gold Increased: 21%',
            },
            {
                'level': 100,
                'skill': 'Own HP Increased: 36%',
            },
            {
                'level': 200,
                'skill': 'Own Attack Power Increased: 18%',
            },
            {
                'level': 300,
                'skill': 'Own Attack Distance Increased: 2%',
            },
            {
                'level': 500,
                'skill': 'A chance to avoid ranged attack increased: 3%',
            },
            {
                'level': 700,
                'skill': 'Own Critical Strike Damage Increased: 55%',
            },
            {
                'level': 900,
                'skill': 'Own Critical Strike Damage Increased: 55%',
            },
            {
                'level': 1100,
                'skill': 'Own Critical Strike Damage Increased: 50%',
            },
            {
                'level': 1200,
                'skill': 'Own Critical Strike Rate Increased: 1%',
            },
            {
                'level': 1300,
                'skill': 'Own Attack Power Increased: 100%',
            }
        ],
        'equipment': []
    },
    {
        'name': 'Senior Fire Bird',
        'id': 6, 
        'tribe': 'human',
        'image': '0006',
        'stars': 4,
        'type': 'magical',
        'fullArt': '6',
        'sex': 'neutral',
        'airAttack': true,
        'cloakingDetection': true,
        'specialUnit': 0,
        'details': {
            'baseAttack': 27.5,
            'baseHP': 88,
            'basePhysicalDefense': 3.6,
            'baseMagicalDefense': 4.4,
            'attackSpeed': 65,
            'attackRange': 180,
            'movementSpeed': 12.00,
            'criticalRate': 20,
            'criticalDamage': 50.0,
            'respawnTime': 150,
            'evolutions': [5, 6],
            'pet': 3,
            'battle': [
                'Normal Attack: Attacks only the enemies that can operate range air attack. (Disregards the skill that makes air units see oneself, among the skills of close units)',
                'Skill Attack: Strike enemies with 3.5 times enhanced attack power and stun enemies for a certain amount of time',
                'Never gets blown away. ',
                'Never gets knocked back. '
            ],
            'specialAbility': ['None'],
            'tribeSkill': 'Human Tribe Skill: A covenant between Human units and the Earth Spirit that grants immunity to knock-back attacks. (Immune to knock-back)'
        },
        'skills': [
            {
                'level': 25,
                'skill': 'Own Attack Power Increased: 23%',
            },
            {
                'level': 50,
                'skill': 'Quest Gold Increased: 24%',
            },
            {
                'level': 100,
                'skill': 'Own HP Increased: 46%',
            },
            {
                'level': 200,
                'skill': 'Own Attack Power Increased: 23%',
            },
            {
                'level': 300,
                'skill': 'Own Attack Distance Increased: 5%',
            },
            {
                'level': 500,
                'skill': 'A chance to avoid ranged attack increased: 6%',
            },
            {
                'level': 700,
                'skill': 'Own Critical Strike Damage Increased: 70%',
            },
            {
                'level': 900,
                'skill': 'Own Critical Strike Damage Increased: 70%',
            },
            {
                'level': 1100,
                'skill': 'Own Critical Strike Damage Increased: 100%',
            },
            {
                'level': 1200,
                'skill': 'Own Critical Strike Rate Increased: 3%',
            },
            {
                'level': 1300,
                'skill': 'Own Attack Power Increased: 200%',
            },
            {
                'level': 1400,
                'skill': 'Own Critical Strike Damage Increased: 400%',
            },
            {
                'level': 1500,
                'skill': "Own Attack Power Increased: 1a%"
            },
            {
                'level': 1600,
                'skill': "Ranged units' Attack Power Increased: 1.5a%"
            },
            {
                'level': 1700,
                'skill': "Ranged units' Critical Strike Damage Increased: 3a%"
            }
        ],
        'equipment': []
    },
    {
        'name': 'Musketeer',
        'id': 7, 
        'tribe': 'human',
        'image': '0007',
        'stars': 3,
        'type': 'physical',
        'fullArt': '8',
        'sex': 'male',
        'airAttack': true,
        'cloakingDetection': true,
        'specialUnit': 0,
        'details': {
            'baseAttack': 15,
            'baseHP': 95,
            'basePhysicalDefense': 1.6,
            'baseMagicalDefense': 1.6,
            'attackSpeed': 50,
            'attackRange': 260,
            'movementSpeed': 8.55,
            'criticalRate': 20,
            'criticalDamage': 50.0,
            'respawnTime': 150,
            'evolutions': [7, 8],
            'pet': null,
            'battle': [
                'Normal Attack: As a ranged physical attack, stun enemies for a certain amount of time with a low possibility',
                'Skill Attack: Using a bullet which has 2.5 time stronger attack power than the basic attack, attack enemies twice and stun them for a certain amount of time',
            ],
            'specialAbility': ['None'],
            'tribeSkill': 'None (only evolved units can have tribe skills)'
        },
        'skills': [
            {
                'level': 25,
                'skill': 'Own HP Increased: 36%',
            },
            {
                'level': 50,
                'skill': 'Own Attack Power Increased: 18%',
            },
            {
                'level': 100,
                'skill': 'Quest Gold Increased: 21%',
            },
            {
                'level': 200,
                'skill': 'Own Defense Power Increased: 22%',
            },
            {
                'level': 300,
                'skill': 'Own Critical Strike Rate Increased: 2%',
            },
            {
                'level': 500,
                'skill': 'Own Moving Speed Increased: 2%',
            },
            {
                'level': 700,
                'skill': 'A chance to avoid ranged attack increased: 3%',
            },
            {
                'level': 900,
                'skill': 'Own Attack Power Increased: 18%',
            },
            {
                'level': 1100,
                'skill': 'Own Attack Power Increased: 100%',
            },
            {
                'level': 1200,
                'skill': 'Own Critical Strike Damage Increased: 50%',
            },
            {
                'level': 1300,
                'skill': "Ranged units' Attack Power Increased: 20%",
            }
        ],
        'equipment': []
    },
    {
        'name': 'Senior Musketeer',
        'id': 8, 
        'tribe': 'human',
        'image': '0008',
        'stars': 4,
        'type': 'physical',
        'fullArt': '8',
        'sex': 'male',
        'airAttack': true,
        'cloakingDetection': true,
        'specialUnit': 0,
        'details': {
            'baseAttack': 30,
            'baseHP': 170,
            'basePhysicalDefense': 3.2,
            'baseMagicalDefense': 3.2,
            'attackSpeed': 50,
            'attackRange': 260,
            'movementSpeed': 8.55,
            'criticalRate': 20,
            'criticalDamage': 50.0,
            'respawnTime': 150,
            'evolutions': [7, 8],
            'pet': 4,
            'battle': [
                'Normal Attack: As a ranged physical attack, stun enemies for a certain amount of time with a low possibility',
                'Skill Attack: Using a bullet which has 3.5 time stronger attack power than the basic attack, attack enemies twice and stun them for a certain amount of time',
                'Never gets knocked back. '
            ],
            'specialAbility': ['None'],
            'tribeSkill': 'Human Tribe Skill: A covenant between Human units and the Earth Spirit that grants immunity to knock-back attacks. (Immune to knock-back)'
        },
        'skills': [
            {
                'level': 25,
                'skill': 'Own HP Increased: 46%',
            },
            {
                'level': 50,
                'skill': 'Own Attack Power Increased: 23%',
            },
            {
                'level': 100,
                'skill': 'Quest Gold Increased: 24%',
            },
            {
                'level': 200,
                'skill': 'Own Defense Power Increased: 28%',
            },
            {
                'level': 300,
                'skill': 'Own Critical Strike Rate Increased: 3%',
            },
            {
                'level': 500,
                'skill': 'Own Moving Speed Increased: 5%',
            },
            {
                'level': 700,
                'skill': 'A chance to avoid ranged attack increased: 6%',
            },
            {
                'level': 900,
                'skill': 'Own Attack Power Increased: 23%',
            },
            {
                'level': 1100,
                'skill': 'Own Attack Power Increased: 200%',
            },
            {
                'level': 1200,
                'skill': 'Own Critical Strike Damage Increased: 100%',
            },
            {
                'level': 1300,
                'skill': "Ranged units' Attack Power Increased: 50%",
            },
            {
                'level': 1400,
                'skill': "Ranged units' Critical Strike Damage Increased: 300%",
            },
            {
                'level': 1500,
                'skill': "Ranged units' Attack Power Increased: 400%"
            },
            {
                'level': 1600,
                'skill': "One's(Own) Tribe's Attack Speed Increased: 1%"
            },
            {
                'level': 1700,
                'skill': "Own's(Own) Tribe's Attack Power Increased: 2.5a%"
            }
        ],
        'equipment': []
    },
    {
        'name': 'Hammer Knight',
        'id': 9, 
        'tribe': 'human',
        'image': '0009',
        'stars': 3,
        'type': 'magical',
        'fullArt': '10',
        'sex': 'male',
        'airAttack': false,
        'cloakingDetection': false,
        'specialUnit': 0,
        'details': {
            'baseAttack': 33,
            'baseHP': 156,
            'basePhysicalDefense': 3.6,
            'baseMagicalDefense': 1.8,
            'attackSpeed': 60,
            'attackRange': 35,
            'movementSpeed': 10.70,
            'criticalRate': 20,
            'criticalDamage': 50.0,
            'respawnTime': 150,
            'evolutions': [9, 10],
            'pet': null,
            'battle': [
                'Normal Attack: Melee Magical Attack',
                'Skill Attack: Strike the target with 1.5 times damages and stun the target for a short time. Nearby enemies also take splash damage with a chance to stun. ',
            ],
            'specialAbility': ['When being attacked, cast a defensive shield immune to physical attacks randomly. '],
            'tribeSkill': 'None (only evolved units can have tribe skills)'
        },
        'skills': [
            {
                'level': 25,
                'skill': 'Own Attack Power Increased: 20%',
            },
            {
                'level': 50,
                'skill': 'Gold Gain Increased during the battle: 22%',
            },
            {
                'level': 100,
                'skill': 'Own HP Increased Increased: 40%',
            },
            {
                'level': 200,
                'skill': "Melee units' Attack Power Increased: 2%",
            },
            {
                'level': 300,
                'skill': 'Own Attack Power Increased: 20%',
            },
            {
                'level': 500,
                'skill': 'Own Critical Strike Rate Increased: 2%',
            },
            {
                'level': 700,
                'skill': 'Own Critical Strike Damage Increased: 60%',
            },
            {
                'level': 900,
                'skill': 'Own Defense Power Increased: 24%',
            },
            {
                'level': 1100,
                'skill': 'Own HP Increased: 100%',
            },
            {
                'level': 1200,
                'skill': 'Own Defense Power Increased: 100%',
            },
            {
                'level': 1300,
                'skill': "Melee units' Attack Power Increased: 20%"
            }
        ],
        'equipment': []
    },
    {
        'name': 'Senior Hammer Knight',
        'id': 10, 
        'tribe': 'human',
        'image': '0010',
        'stars': 4,
        'type': 'magical',
        'fullArt': '10',
        'sex': 'male',
        'airAttack': false,
        'cloakingDetection': false,
        'specialUnit': 0,
        'details': {
            'baseAttack': 44,
            'baseHP': 228,
            'basePhysicalDefense': 7.2,
            'baseMagicalDefense': 3.6,
            'attackSpeed': 60,
            'attackRange': 35,
            'movementSpeed': 10.70,
            'criticalRate': 20,
            'criticalDamage': 50.0,
            'respawnTime': 150,
            'evolutions': [9, 10],
            'pet': 5,
            'battle': [
                'Normal Attack: Melee Magical Attack',
                'Skill Attack: Strike the target with double damage and stun the target for a certain amount of time. At the same time, splash damage approaching enemies and stun them on certain possibilities. ',
            ],
            'specialAbility': ['When being attacked, cast a defense shield immune to physical attacks randomly. '],
            'tribeSkill': 'Human Tribe Skill: A covenant between Human uniuts and the Earth Spirit that grants immunity to knock-back attacks. (Immune to knock-back)'
        },
        'skills': [
            {
                'level': 25,
                'skill': "Own Attack Power Increased: %23",
            },
            {
                'level': 50,
                'skill': "Gold Gain Increased during the battle: 24%",
            },
            {
                'level': 100,
                'skill': "Own HP Increased: 46%",
            },
            {
                'level': 200,
                'skill': "Melee units' Attack Power Increased: 3%",
            },
            {
                'level': 300,
                'skill': "Own Attack Power Increased: 23%",
            },
            {
                'level': 500,
                'skill': "Own Critical Strike Rate Increased: 3%",
            },
            {
                'level': 700,
                'skill': "Own Critical Strike Damage Increased: 70%",
            },
            {
                'level': 900,
                'skill': "Own Defense Power Increased: 28%",
            },
            {
                'level': 1100,
                'skill': "Own HP Increased: 300%",
            },
            {
                'level': 1200,
                'skill': "Own Defense Power Increased: 200%",
            },
            {
                'level': 1300,
                'skill': "Melee units' Attack Power Increased: 50%",
            },
            {
                'level': 1400,
                'skill': "Melee units' Attack Power Increased: 300%"
            }
        ],
        'equipment': []
    },
    {
        'name': 'Cavalry Knight',
        'id': 11, 
        'tribe': 'human',
        'image': '0011',
        'stars': 4,
        'type': 'physical',
        'fullArt': '12',
        'sex': 'male',
        'airAttack': false,
        'cloakingDetection': false,
        'specialUnit': 0,
        'details': {
            'baseAttack': 30.1,
            'baseHP': 248,
            'basePhysicalDefense': 5,
            'baseMagicalDefense': 3,
            'attackSpeed': 60,
            'attackRange': 35,
            'movementSpeed': 13.91,
            'criticalRate': 20,
            'criticalDamage': 50.0,
            'respawnTime': 150,
            'evolutions': [11, 12],
            'pet': null,
            'battle': [
                'Normal Attack: Melee Physical Attack',
                'Skill Attack: Strike the target with 1.5 times damage, splash damage the approaching enemies',
            ],
            'specialAbility': ['None'],
            'tribeSkill': 'None (only evolved units can heave tribe skills)'
        },
        'skills': [
            {
                'level': 25,
                'skill': "Quest Gold Increased: 23%",
            },
            {
                'level': 50,
                'skill': "Own Critical Strike Rate Increased: 3%",
            },
            {
                'level': 100,
                'skill': "One's(Own) Tribe's Moving Speed Increased: 1%",
            },
            {
                'level': 200,
                'skill': "Own Attack Power Increased: 21%",
            },
            {
                'level': 300,
                'skill': "Own Defense Power Increased: 26%",
            },
            {
                'level': 500,
                'skill': "Melee units' Attack Power Increased: 3%",
            },
            {
                'level': 700,
                'skill': "Own HP Increased: 43%",
            },
            {
                'level': 900,
                'skill': "One's(Own) Tribe's Critical Strike Damage Increased: 10%",
            },
            {
                'level': 1100,
                'skill': "Own Attack Power Increased: 100%",
            },
            {
                'level': 1200,
                'skill': "Own HP Increased Increased: 200%",
            },
            {
                'level': 1300,
                'skill': "Melee units' Attack Power Increased: 50%",
            },
            {
                'level': 1400,
                'skill': "One's(Own) Tribe's Critical Strike Damage Increased: 50%"
            }
        ],
        'equipment': []
    },
    {
        'name': 'Senior Cavalry Knight',
        'id': 12, 
        'tribe': 'human',
        'image': '0012',
        'stars': 5,
        'type': 'physical',
        'fullArt': '12',
        'sex': 'male',
        'airAttack': false,
        'cloakingDetection': false,
        'specialUnit': 0,
        'details': {
            'baseAttack': 47.3,
            'baseHP': 392,
            'basePhysicalDefense': 8.75,
            'baseMagicalDefense': 5.25,
            'attackSpeed': 60,
            'attackRange': 35,
            'movementSpeed': 13.91,
            'criticalRate': 20,
            'criticalDamage': 50.0,
            'respawnTime': 150,
            'evolutions': [11, 12],
            'pet': 6,
            'battle': [
                'Normal Attack: Melee Physical Attack',
                'Skill Attack: Strike the target with double damage, splash damage approaching enemies',
                'Never gets knocked back. ',
            ],
            'specialAbility': ['None'],
            'tribeSkill': 'Human Tribe Skill: A covenant between Human units and the Earth Spirit that grants immunity to knock-back attacks. (Immune'
        },
        'skills': [
            {
                'level': 25,
                'skill': "Quest Gold Increased: 26%",
            },
            {
                'level': 50,
                'skill': "Own Critical Strike Rate Increased: 4%",
            },
            {
                'level': 100,
                'skill': "One's(Own) Tribe's Moving Speed Increased: 3%",
            },
            {
                'level': 200,
                'skill': "Own Attack Power Increased: 26%",
            },
            {
                'level': 300,
                'skill': "Own Defense Power Increased: 32%",
            },
            {
                'level': 500,
                'skill': "Melee units' Attack Power Increased: 4%",
            },
            {
                'level': 700,
                'skill': "Own HP Increased: 53%",
            },
            {
                'level': 900,
                'skill': "One's(Own) Tribe's Critical Strike Damage Increased: 20%",
            },
            {
                'level': 1100,
                'skill': "Own Attack Power Increased: 200%",
            },
            {
                'level': 1200,
                'skill': "Own HP Increased: 300%",
            },
            {
                'level': 1300,
                'skill': "Melee units' Attack Power Increased: 100%",
            },
            {
                'level': 1400,
                'skill': "One's(Own) Tribe's Critical Stirke Damage Increased: 100%",
            },
            {
                'level': 1500,
                'skill': "Melee units' Critical Strike Damage Increased: 1a%",
            },
            {
                'level': 1600,
                'skill': "One's(Own) Tribe's Attack Power Increased: 3a%",
            },
            {
                'level': 1700,
                'skill': "One's(Own) Tribe's Attack Speed Increased: 2%",
            },
            {
                'level': 1800,
                'skill': "Melee units' Critical Strike Damage Increased: 4.5a%",
            }
        ],
        'equipment': []
    },
    {
        'name': 'Golem',
        'id': 13, 
        'tribe': 'human',
        'image': '0013',
        'stars': 5,
        'type': 'physical',
        'fullArt': '14',
        'sex': 'neutral',
        'airAttack': false,
        'cloakingDetection': false,
        'specialUnit': 0,
        'details': {
            'baseAttack': 40,
            'baseHP': 483,
            'basePhysicalDefense': 13.5,
            'baseMagicalDefense': 7.2,
            'attackSpeed': 65,
            'attackRange': 40,
            'movementSpeed': 7.76,
            'criticalRate': 20,
            'criticalDamage': 50.0,
            'respawnTime': 150,
            'evolutions': [13, 14, 246],
            'pet': null,
            'battle': [
                'Normal Attack: Splash damage enemies that are close to the target, the target will be 100% stunned, surrounding units will be randomly stunned',
                'Skill Attack: Cast an immune to physical attacks shield, stun the target with 100% chance while dealing double damage. Surrounding enemies will be randomly stunned',
                'Never gets stunned. '
            ],
            'specialAbility': [
                'Large Unit: Reduced impact from blow and knock-back attacks and short duration for freeze/ensnare. ',
                'While being attacked, a shield defending 99% of physical and magical attack is casted on certain possibilities'
            ],
            'tribeSkill': 'None (only evolved units can have tribe skills)'
        },
        'skills': [
            {
                'level': 25,
                'skill': "Own HP Increased: 46%",
            },
            {
                'level': 50,
                'skill': "Gold Gain Increased during the battle: 24%",
            },
            {
                'level': 100,
                'skill': "Mid-air units attack yourself: 100%",
            },
            {
                'level': 200,
                'skill': "Own Defense Power Increased: 28%",
            },
            {
                'level': 300,
                'skill': "Own Attack Power Increased: 23%",
            },
            {
                'level': 500,
                'skill': "Own Critical Strike Damage Increased: 70%",
            },
            {
                'level': 700,
                'skill': "A chance to block melee attack increased: 5%",
            },
            {
                'level': 900,
                'skill': "Own HP Increased: 46%",
            },
            {
                'level': 1100,
                'skill': "Own HP Increased: 300%",
            },
            {
                'level': 1200,
                'skill': "Own HP Increased: 500%",
            },
            {
                'level': 1300,
                'skill': "All units' Defense Power Increased: 200%",
            },
            {
                'level': 1400,
                'skill': "All units' HP Increased: 3a%",
            },
            {
                'level': 1500,
                'skill': "All units' HP Increased: 10a%",
            }
        ],
        'equipment': []
    },
    {
        'name': 'Senior Golem',
        'id': 14, 
        'tribe': 'human',
        'image': '0014',
        'stars': 6,
        'type': 'physical',
        'fullArt': '14',
        'sex': 'neutral',
        'airAttack': false,
        'cloakingDetection': false,
        'specialUnit': 0,
        'details': {
            'baseAttack': 70,
            'baseHP': 840,
            'basePhysicalDefense': 25.5,
            'baseMagicalDefense': 13.6,
            'attackSpeed': 65,
            'attackRange': 40,
            'movementSpeed': 7.76,
            'criticalRate': 20,
            'criticalDamage': 50.0,
            'respawnTime': 150,
            'evolutions': [13, 14, 246],
            'pet': 7,
            'battle': [
                'Normal Attack: Splash damage enemies that are clsoe to the target, the target will be 100% stunned, surrounding units will be randomly stunned',
                'Skill Attack: Cast an immune to physical attacks shield, stun the target with 100% chance while dealing double damage. Surrounding enemies will be randomly stunned',
                'Never gets stunned. ',
                'Never gets knocked back. '
            ],
            'specialAbility': [
                'Large Unit: Reduced impact from blow and knock-back attacks and short duration for freeze/ensnare. ',
                'While being attacked, a shield defending 99% of physical and magical attack is casted on certain possibilities'
            ],
            'tribeSkill': 'A covenant between Human units and the Earth Spirit that grants immunity to knock-back attacks. (Immune to knock-back)'
        },
        'skills': [
            {
                'level': 25,
                'skill': "Own HP Increased: 61%",
            },
            {
                'level': 50,
                'skill': "Gold Gain Increased during the battle: 28%",
            },
            {
                'level': 100,
                'skill': "Mid-air units attack yourself: 100%",
            },
            {
                'level': 200,
                'skill': "Own Defense Power Increased: 37%",
            },
            {
                'level': 300,
                'skill': "Own Attack Power Increased: 31%",
            },
            {
                'level': 500,
                'skill': "Own Critical Strike Damage Increased: 95%",
            },
            {
                'level': 700,
                'skill': "A chance to block melee attack increased: 9%",
            },
            {
                'level': 900,
                'skill': "Own HP Increased: 61%",
            },
            {
                'level': 1100,
                'skill': "Own Defense Power Increased: 300%",
            },
            {
                'level': 1200,
                'skill': "Own HP Increased: 1a%",
            },
            {
                'level': 1300,
                'skill': "All units' Defense Power Increased: 500%",
            },
            {
                'level': 1400,
                'skill': "All units' HP Increased: 6a%",
            },
            {
                'level': 1500,
                'skill': "All units' HP Increased: 20a%",
            },
            {
                'level': 1600,
                'skill': "One's(Own) Tribe's HP Increased: 300a%",
            },
            {
                'level': 1700,
                'skill': "Melee units' Attack Power Increased: 120a%",
            },
            {
                'level': 1800,
                'skill': "Melee units' Defense Power Increased: 240a%",
            },
            {
                'level': 1900,
                'skill': "All units' HP Increased: 5.4b%",
            },
            {
                'level': 2000,
                'skill': "One's(Own) Tribe's Attack Power Increased: 4b%",
            }
        ],
        'equipment': []
    },
    {
        'name': 'Fire Mage',
        'id': 15, 
        'tribe': 'human',
        'image': '0015',
        'stars': 5,
        'type': 'magical',
    },
    {
        'name': 'Senior Fire Mage',
        'id': 16, 
        'tribe': 'human',
        'image': '0016',
        'stars': 6,
        'type': 'magical',
    },
    {
        'name': 'Gunner',
        'id': 17, 
        'tribe': 'human',
        'image': '0017',
        'stars': 5,
        'type': 'magical',
    },
    {
        'name': 'Senior Gunner',
        'id': 18, 
        'tribe': 'human',
        'image': '0018',
        'stars': 6,
        'type': 'magical',
    },
    {
        'name': 'Priest',
        'id': 94, 
        'tribe': 'human',
        'image': '0094',
        'stars': 5,
        'type': 'magical',
    },
    {
        'name': 'Senior Priest',
        'id': 95, 
        'tribe': 'human',
        'image': '0095',
        'stars': 6,
        'type': 'magical',
    },
    {
        'name': 'Aladdin',
        'id': 104, 
        'tribe': 'human',
        'image': '0104',
        'stars': 5,
        'type': 'physical',
    },
    {
        'name': 'Senior Aladdin',
        'id': 105, 
        'tribe': 'human',
        'image': '0105',
        'stars': 6,
        'type': 'physical',
    },
    {
        'name': 'Griffin Rider',
        'id': 110, 
        'tribe': 'human',
        'image': '0110',
        'stars': 5,
        'type': 'physical',
    },
    {
        'name': 'Senior Griffin Rider',
        'id': 111, 
        'tribe': 'human',
        'image': '0111',
        'stars': 6,
        'type': 'physical',
    },
    {
        'name': 'Hot-Blooded Xuanzang',
        'id': 116, 
        'tribe': 'human',
        'image': '0116',
        'stars': 5,
        'type': 'physical',
    },
    {
        'name': 'Senior Hot-Blooded Xuanzang',
        'id': 117, 
        'tribe': 'human',
        'image': '0117',
        'stars': 6,
        'type': 'physical',
    },
    {
        'name': 'Pilot',
        'id': 124, 
        'tribe': 'human',
        'image': '0124',
        'stars': 5,
        'type': 'physical',
    },
    {
        'name': 'Senior Pilot',
        'id': 125, 
        'tribe': 'human',
        'image': '0125',
        'stars': 6,
        'type': 'physical',
    },
    {
        'name': 'Steam Punk',
        'id': 134, 
        'tribe': 'human',
        'image': '0134',
        'stars': 5,
        'type': 'magical',
    },
    {
        'name': 'Senior Steam Punk',
        'id': 135, 
        'tribe': 'human',
        'image': '0135',
        'stars': 6,
        'type': 'magical',
    },
    {
        'name': 'Valkyrie',
        'id': 142, 
        'tribe': 'human',
        'image': '0142',
        'stars': 5,
        'type': 'physical',
    },
    {
        'name': 'Senior Valkyrie',
        'id': 143, 
        'tribe': 'human',
        'image': '0143',
        'stars': 6,
        'type': 'physical',
    },
    {
        'name': 'Flame Spirit',
        'id': 158, 
        'tribe': 'human',
        'image': '0158',
        'stars': 5,
        'type': 'magical',
    },
    {
        'name': 'Senior Flame Spirit',
        'id': 159, 
        'tribe': 'human',
        'image': '0159',
        'stars': 6,
        'type': 'magical',
    },
    {
        'name': 'Cleric',
        'id': 166, 
        'tribe': 'human',
        'image': '0166',
        'stars': 5,
        'type': 'magical',
    },
    {
        'name': 'Senior Cleric',
        'id': 167, 
        'tribe': 'human',
        'image': '0167',
        'stars': 6,
        'type': 'magical',
    },
    {
        'name': 'Winged Knight',
        'id': 174, 
        'tribe': 'human',
        'image': '0174',
        'stars': 5,
        'type': 'physical',
    },
    {
        'name': 'Senior Winged Knight',
        'id': 175, 
        'tribe': 'human',
        'image': '0175',
        'stars': 6,
        'type': 'physical',
    },
    {
        'name': 'Musketress',
        'id': 182, 
        'tribe': 'human',
        'image': '0182',
        'stars': 5,
        'type': 'magical',
    },
    {
        'name': 'Senior Musketress',
        'id': 183, 
        'tribe': 'human',
        'image': '0183',
        'stars': 6,
        'type': 'magical',
    },
    {
        'name': 'Crimson Hawk Rider',
        'id': 190, 
        'tribe': 'human',
        'image': '0190',
        'stars': 5,
        'type': 'physical',
    },
    {
        'name': 'Senior Crimson Hawk Rider',
        'id': 191, 
        'tribe': 'human',
        'image': '0191',
        'stars': 6,
        'type': 'physical',
    },
    {
        'name': 'Paladin',
        'id': 198, 
        'tribe': 'human',
        'image': '0198',
        'stars': 5,
        'type': 'magical',
    },
    {
        'name': 'Senior Paladin',
        'id': 199, 
        'tribe': 'human',
        'image': '0199',
        'stars': 6,
        'type': 'magical',
    },
    {
        'name': 'Sindbad',
        'id': 206, 
        'tribe': 'human',
        'image': '0206',
        'stars': 5,
        'type': 'magical',
    },
    {
        'name': 'Senior Sindbad',
        'id': 207, 
        'tribe': 'human',
        'image': '0207',
        'stars': 6,
        'type': 'magical',
    },
    {
        'name': 'Salamander Rider',
        'id': 214, 
        'tribe': 'human',
        'image': '0214',
        'stars': 5,
        'type': 'physical',
    },
    {
        'name': 'Senior Salamander Rider',
        'id': 215, 
        'tribe': 'human',
        'image': '0215',
        'stars': 6,
        'type': 'physical',
    },
    {
        'name': 'Fire Ranger',
        'id': 222, 
        'tribe': 'human',
        'image': '0222',
        'stars': 5,
        'type': 'magical',
    },
    {
        'name': 'Senior Fire Ranger',
        'id': 223, 
        'tribe': 'human',
        'image': '0223',
        'stars': 6,
        'type': 'magical',
    },
    {
        'name': 'Flame Sibyl',
        'id': 230, 
        'tribe': 'human',
        'image': '0230',
        'stars': 5,
        'type': 'magical',
    },
    {
        'name': 'Senior Flame Sibyl',
        'id': 231, 
        'tribe': 'human',
        'image': '0231',
        'stars': 6,
        'type': 'magical',
    },
    {
        'name': 'Extreme Fire Mage',
        'id': 238, 
        'tribe': 'human',
        'image': '0238',
        'stars': 7,
        'type': 'magical',
    },
    {
        'name': 'Extreme Gunner',
        'id': 242, 
        'tribe': 'human',
        'image': '0242',
        'stars': 7,
        'type': 'magical',
    },
    {
        'name': 'Extreme Golem',
        'id': 246, 
        'tribe': 'human',
        'image': '0246',
        'stars': 7,
        'type': 'physical',
    },
    {
        'name': 'Extreme Hot-Blooded Xuanzang',
        'id': 293, 
        'tribe': 'human',
        'image': '293',
        'stars': 7,
        'type': 'physical',
    },
    {
        'name': 'Extreme Aladdin',
        'id': 269, 
        'tribe': 'human',
        'image': '269',
        'stars': 7,
        'type': 'physical',
    },
    {
        'name': 'Atlantia',
        'id': 250, 
        'tribe': 'human',
        'image': '981_UI_UNIT_ICONS0250',
        'stars': 5,
        'type': 'physical',
    },
    {
        'name': 'Senior Atlantia',
        'id': 251, 
        'tribe': 'human',
        'image': '982_UI_UNIT_ICONS0251',
        'stars': 6,
        'type': 'physical',
    },
    {
        'name': 'Extreme Priest',
        'id': 258, 
        'tribe': 'human',
        'image': '1050_UI_UNIT_ICONS0258',
        'stars': 7,
        'type': 'magical',
    },
    {
        'name': 'Rose Chevalier',
        'id': 261, 
        'tribe': 'human',
        'image': '1061_UI_UNIT_ICONS0261',
        'stars': 5,
        'type': 'physical',
    },
    {
        'name': 'Senior Rose Chevalier',
        'id': 262, 
        'tribe': 'human',
        'image': '1062_UI_UNIT_ICONS0262',
        'stars': 6,
        'type': 'physical',
    },
    {
        'name': 'Engineer',
        'id': 273, 
        'tribe': 'human',
        'image': '1113_UI_UNIT_ICONS0273',
        'stars': 5,
        'type': 'magical',
    },
    {
        'name': 'Senior Engineer',
        'id': 274, 
        'tribe': 'human',
        'image': '1114_UI_UNIT_ICONS0274',
        'stars': 6,
        'type': 'magical',
    },
    {
        'name': 'Extreme Griffin Rider',
        'id': 281, 
        'tribe': 'human',
        'image': '1174_UI_UNIT_ICONS0281',
        'stars': 7,
        'type': 'physical',
    },
    {
        'name': 'Machine Gunner',
        'id': 285, 
        'tribe': 'human',
        'image': '1210_UI_UNIT_ICONS0285',
        'stars': 5,
        'type': 'physical',
    },
    {
        'name': 'Senior Machine Gunner',
        'id': 286, 
        'tribe': 'human',
        'image': '1211_UI_UNIT_ICONS0286',
        'stars': 6,
        'type': 'physical',
    },
    {
        'name': 'Ancient Flame Dragon Knight',
        'id': 9996, 
        'tribe': 'human',
        'image': 'd0001',
        'stars': 8,
        'type': 'physical',
    }
]