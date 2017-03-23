import Ember from 'ember';

export default Ember.Component.extend({
    comments: Ember.computed.reads('item.comments'),
    commentsCount: Ember.computed('comments', function() {
        return this.get('comments').reduce((acc) => acc + 1, 0);
    }),
    commentAuthors: Ember.computed.mapBy('comments', 'author'),
    uniqueCommentAuthors: Ember.computed.uniq('commentAuthors')
});
