from odoo import http
from odoo.http import request
import json

class ProjectPortalController(http.Controller):
    @http.route('/my/projects', type='json', auth='user', methods=['GET'])
    def get_projects(self):
        projects = request.env['project.portal'].search([])
        return json.dumps([{
            'id': project.id,
            'name': project.name,
            'status': project.status,
            'last_deployment': project.last_deployment,
        } for project in projects])
