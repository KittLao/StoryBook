const moment = require('moment');
/**
 * formatDate: Formates the date.
 * 
 * truncate: For long texts, reduce the length of the displayed
 * text on public stories with '...'. The full story can be seen
 * when 'read more' is clicked.
 * 
 * stripTags: Strip all html tags using regex.
 * 
 * editIcon: Needs the user who posted the story, logged in user, 
 * ID of the story, and if it is a floating class. Only display
 * the edit icon for stories that the logged in user posted. Return
 * html tags to render out the icon.
 * 
 * select: 
 */
module.exports = {
    formatDate: function (date, format) {
        return moment(date).format(format);
    },
    truncate: function (str, len) {
      if (str.length > len && str.length > 0) {
        let new_str = str + ' '
        new_str = str.substr(0, len)
        new_str = str.substr(0, new_str.lastIndexOf(' '))
        new_str = new_str.length > 0 ? new_str : str.substr(0, len)
        return new_str + '...'
      }
      return str
    },
    stripTags: function (input) {
      return input.replace(/<(?:.|\n)*?>/gm, '')
    },
    editIcon: function (storyUser, loggedUser, storyId, floating = true) {
        if (storyUser._id.toString() == loggedUser._id.toString()) {
          if (floating) {
            return `<a href="/stories/edit/${storyId}" class="btn-floating halfway-fab blue">
            <i class="fas fa-edit fa-small"></i>
            </a>`;
          } else {
            return `<a href="/stories/edit/${storyId}"><i class="fas fa-edit"></i></a>`;
          }
        } else {
          return '';
        }
      },
    select: function (selected, options) {
      return options
        .fn(this)
        .replace(
          new RegExp(' value="' + selected + '"'),
          '$& selected="selected"'
        )
        .replace(
          new RegExp('>' + selected + '</option>'),
          ' selected="selected"$&'
        )
    }
}