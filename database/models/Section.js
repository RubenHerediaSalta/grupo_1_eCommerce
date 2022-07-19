module.exports = (sequelize, dataTypes) => {
    let alias = 'Section'; //   
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        name: {
            type: dataTypes.STRING(500),
            allowNull: false
        }
    };
    let config = {
        tableName: 'Sections',
        timestamps: false,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
    const Section = sequelize.define(alias,cols,config);

    Section.associate = function(models){
        Section.hasMany(models.Product, {
            as: "products",
            foreignKey: "section_id"
        })
    }
    return Section
};