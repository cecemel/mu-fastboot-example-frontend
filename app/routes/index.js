import Ember from 'ember';

export default Ember.Route.extend({
    fastboot: Ember.inject.service(),
    model() {
        if (this.get('fastboot.isFastBoot')) {
            return this.store.findAll('blog-post', {include: "comments"});
        }
        return this.store.findAll('blog-post');
    }
});
