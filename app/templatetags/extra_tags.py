from app import choices
from django import template

register = template.Library()
@register.simple_tag
def get_choices(name):
    """ Get schoices by name """

    return getattr(choices, name, [])