from odoo import http
from odoo.http import request
import json

class ProjectPortalController(http.Controller):

    @http.route('/my/react', type='http', auth='user', website=True)
    def render_react_page(self):
        return request.render('react_test.project_portal_template')




    @http.route('/my/projects', type='json', auth='user', methods=['GET'],website=True)
    def get_projects(self):
        projects = request.env['project.portal'].search([])
        return json.dumps([{
            'id': project.id,
            'name': project.name,
            'status': project.status,
            'last_deployment': project.last_deployment,
        } for project in projects])


