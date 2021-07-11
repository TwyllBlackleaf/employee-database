INSERT INTO departments (name)
VALUES
    ("Mining"),
    ("Woodworking"),
    ("Stoneworking"),
    ("Farming"),
    ("Crafting"),
    ("Administration"),
    ("Military");

INSERT INTO roles (title, salary, department_id)
VALUES
    ("Miner", 10, 1),
    ("Carpenter", 10, 2),
    ("Woodcutter", 8, 2),
    ("Engraver", 12, 3),
    ("Mason", 11, 3),
    ("Brewer", 11, 4),
    ("Cook", 10, 4),
    ("Grower", 8, 4),
    ("Herbalist", 6, 4),
    ("Gem Cutter", 13, 5),
    ("Bone Carver", 10, 5),
    ("Stone Crafter", 10, 5),
    ("Building Designer", 12, 6),
    ("Mayor", 14, 6),
    ("Archer", 10, 7),
    ("Hammerdwarf", 11, 7);


INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
    ("Mebzuth", "Sabregranite", 1, NULL),
    ("Lolor", "Palacerope", 1, 1),
    ("Zaneg", "Pulleyclasp", 2, NULL),
    ("Zutthan", "Winddagger", 3, 3),
    ("Tulon", "Wheeledship", 5, NULL),
    ("Degel", "Swordmine", 12, 5),
    ("Sakzul", "Armortheater", 14, NULL),
    ("Zon", "Archboulder", 15, 7),
    ("Litast", "Sabrehelm", 16, 7),
    ("Ubbul", "Bouldertorch", 6, 7),
    ("Inod", "Craftedwork", 8, 10),
    ("Edzul", "Imusheshtan", 9, 10);