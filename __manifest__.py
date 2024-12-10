{
    "name": "React Test Module",
    "version": "1.0",
    "summary": "Test React Integration in Odoo",
    "depends": ['base', 'web', 'portal', 'project'],  # Depends on Odoo's web module
    "data": [
        "views/react_template.xml",
        "views/assets.xml"
    ],
    "assets": {
        "web.assets_frontend": [
            "react_test/static/src/js/dist/bundle.js",
            "react_test/static/src/js/components/list_project.js"
        ],
    },
    'application': True,
}
