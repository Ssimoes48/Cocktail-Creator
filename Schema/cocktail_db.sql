-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- Link to schema: https://app.quickdatabasediagrams.com/#/d/BbtC6G
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.


CREATE TABLE ingredients (
    name VARCHAR   NOT NULL,
    type VARCHAR   NOT NULL,
    CONSTRAINT pk_ingredients PRIMARY KEY (
        name
     )
);

CREATE TABLE cocktail (
    name VARCHAR   NOT NULL,
    type VARCHAR   NOT NULL,
    image_src URL   NOT NULL,
    CONSTRAINT pk_cocktail PRIMARY KEY (
        name
     )
);

CREATE TABLE state (
    state VARCHAR   NOT NULL,
    abbr VARCHAR   NOT NULL,
    latitude long   NOT NULL,
    longitude long   NOT NULL,
    cocktail VARCHAR   NOT NULL,
    CONSTRAINT pk_state PRIMARY KEY (
        state
     )
);

CREATE TABLE recipe (
    cocktail VARCHAR   NOT NULL,
    glass_type VARCHAR   NOT NULL,
    glass_size VARCHAR   NOT NULL,
    instructions VARCHAR   NOT NULL,
    CONSTRAINT pk_recipe PRIMARY KEY (
        cocktail
     )
);

CREATE TABLE measure (
    ingredient VARCHAR   NOT NULL,
    measure FLOAT   NOT NULL,
    cocktail VARCHAR   NOT NULL,
    unit varchar   NOT NULL,
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

