def create_classes(db):
    class ingredients(db.Model):
        __tablename__ = 'ingredients'

        name = db.Column(db.String(64), primary_key=True)
        type = db.Column(db.String(64))
             
    class cocktail(db.Model):
        __tablename__ = 'cocktail'
        name = db.Column(db.String(64), primary_key=True)
        type = db.Column(db.String(64))
        
    class state(db.Model):
        __tablename__ = 'state'
        state         = db.Column(db.String(64), primary_key = True, null = False)
        abbr          = db.Column(db.String(64))
        latitude      = db.Column(db.Float)
        longitude     = db.Column(db.Float)
        cocktail      = db.relationship('cocktail', backref = 'name', lazy = 'dynamic')
        image_src     = db.Column(db.String(64))
        
    class recipe(db.Model):
        __tablename__ = 'recipe'
        cocktail      = db.relationship('cocktail', backref = 'name', primary_key = True, lazy = 'dynamic')
        glass_type    = db.Column(db.String(64))
        glass_size    = db.Column(db.String(64))
        instructions  = db.Column(db.String(64))
        
    class measure(db.Model):
        __tablename__ = 'measure'
        ingredient    = db.relationship('ingredients', backref = 'name', primary_key = True, lazy = 'dynamic')
        measure        = db.Column(db.Integer, db.ForeignKey('member.id'))
        version      = db.Column(db.Integer, db.ForeignKey('version.id'))

def __repr__(self):
            return '<Pet %r>' % (self.name)
    return Pet
