module.exports = (sequelize, dataTypes) => {
    let alias = 'Product'; //   
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
        },
        section: {
            type: dataTypes.STRING(500),
            allowNull: false, 

        },
        description: {
            type: dataTypes.STRING(3000),
            allowNull: false
        },
        image: {
            type: dataTypes.STRING(500),            
            allowNull: true
        },
        price:{
            type: dataTypes.BIGINT(10)
        },
        discount: {
            type: dataTypes.BIGINT(10)
        }
    };
    let config = {
        tableName: 'Products',
        timestamps: false,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
    const Product = sequelize.define(alias,cols,config);

    Product.associate = function(models){
        Product.belongsTo(models.Section, {
            as: "sections",
            foreignKey: "section_id"
        })
    }
    return Product
}