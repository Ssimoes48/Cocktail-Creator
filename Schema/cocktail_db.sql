-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- Link to schema: https://app.quickdatabasediagrams.com/#/d/BbtC6G
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.


CREATE TABLE ingredients (
    name VARCHAR   ,
    type VARCHAR   ,
    CONSTRAINT pk_ingredients PRIMARY KEY (
        name
     )
);

CREATE TABLE cocktail (
    name VARCHAR   ,
    type VARCHAR   ,
    CONSTRAINT pk_cocktail PRIMARY KEY (
        name
     )
);

CREATE TABLE state (
    state VARCHAR   NOT NULL,
    abbr VARCHAR   ,
    latitude  DOUBLE PRECISION,
    longitude DOUBLE PRECISION,
    cocktail VARCHAR   ,
    image_src VARCHAR   ,
    CONSTRAINT pk_state PRIMARY KEY (
        state
     )
);

CREATE TABLE recipe (
    cocktail VARCHAR   ,
    glass_type VARCHAR   ,
    glass_size VARCHAR   ,
    instructions VARCHAR   ,
    CONSTRAINT pk_recipe PRIMARY KEY (
        cocktail
     )
);

CREATE TABLE measure (
    ingredient VARCHAR   ,
    measure VARCHAR  ,
    cocktail VARCHAR   ,
    unit varchar   ,
    CONSTRAINT pk_measure PRIMARY KEY (
        ingredient,cocktail
     )
);

ALTER TABLE state ADD CONSTRAINT fk_state_cocktail FOREIGN KEY(cocktail)
REFERENCES cocktail (name);

ALTER TABLE recipe ADD CONSTRAINT fk_recipe_cocktail FOREIGN KEY(cocktail)
REFERENCES cocktail (name);

ALTER TABLE measure ADD CONSTRAINT fk_measure_ingredient FOREIGN KEY(ingredient)
REFERENCES ingredients (name);

ALTER TABLE measure ADD CONSTRAINT fk_measure_cocktail FOREIGN KEY(cocktail)
REFERENCES cocktail (name);

