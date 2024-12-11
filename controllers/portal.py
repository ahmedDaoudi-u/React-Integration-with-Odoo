from odoo import http
from odoo.http import request
import json

class ProjectPortalController(http.Controller):

    @http.route('/my/react', type='http', auth='user', website=True)
    def render_react_page(self):
        return request.render('react_test.project_portal_template')





