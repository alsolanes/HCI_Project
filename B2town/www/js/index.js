/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
 //MODELS
 var url_host = '192.168.1.38';

 var Photo = Backbone.Model.extend({
    initialize: function(){
        console.log("Photo created1");
    }
 });
 var Caption = Backbone.Model.extend({
    initialize: function(){
        console.log("Caption created2");
    }
 });
 //COLLECTION
 var PhotoCollection = Backbone.Collection.extend({
    model: Photo,
    url: 'http://'+url_host+'/laravel/B2town_server/public',
 });
 /**var Caption = Backbone.Collection.extend({
    url: 'http://'+url_host+'/laravel/B2town_server/public/captions',
 });*/
 var CaptionCollection = Backbone.Collection.extend({
    model: Caption,
    url: 'http://'+url_host+'/laravel/B2town_server/public/captions',
 });

var photos = new PhotoCollection;
var captions = new CaptionCollection;

//VIEWS
var PhotoView = Backbone.View.extend({
    tagName: "li",
    template: _.template($('#photo').html()),
    initialize: function(){
        this.model.on('change',this.render, this);
    },
    events: {
        "click a" : "open"
    },
    open: function(e){
        e.preventDefault();
        $("#modalPicture").html(this.template(this.model.toJSON()));
        //$("#modalPicture").attr('data-cid',this.model.get('id'));
        captions.reset();
        captions.fetch({ url: "http://"+url_host+"/laravel/B2town_server/public/captions/"+ this.model.get('id')});
        $("#captionsModal").modal('show');
        return false;
    },
    render: function(){
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});

var PhotosView = Backbone.View.extend({
    el: $("#list"),
    initialize: function(){
        this.collection.on("add",this.addPhoto,this);
        this.collection.on("reset",this.addAllPhotos,this);
    },
    addAllPhotos: function(){
        this.$el.empty();
        this.collection.each(this.addPhoto, this);
    },
    addPhoto: function(model){
        view = new PhotoView({model:model});
        view.render();
        this.$el.append(view.el);
    },
    render: function(){
        this.addAllPhotos();
        return this;
    }
});

var photosView = new PhotosView({collection:photos});
photos.fetch();

var CaptionView = Backbone.View.extend({
    template: _.template($('#caption').html()),
    initialize: function(){
        this.model.on('change',this.render,this);
        console.log("init capt view");
    },
    render: function(){
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});

var CaptionsView = Backbone.View.extend({
    el: $('#captionsList'),

    initialize: function(){
        this.collection.on('add',this.addCaption, this);
        this.collection.bind('reset',this.addAllCaptions, this);
        
    },
    // events:{
    //     'submit #newCaptionForm' : 'addNewCaption'
    // },
    addNewCaption: function(e){
        
        e.preventDefault();
        newCaption = new Caption({photo_id:$('#modalPicture').attr('data-cid'),caption:$('#captionInput').val()});
        newCaption.save();
        this.collection.add(newCaption);
        $('#captionInput').val('');

        return false;
    },
    addCaption: function(model){
        view = new CaptionView({model:model});
        view.render();
        this.$el.prepend(view.el);
    },
    addAllCaptions: function(){
        this.$el.empty();
        //this.$el.append( _.template($('#caption-form').html())); //append the form
        this.collection.each(this.addCaption, this);

    },
    render: function(){
        this.addAllCaptions();
        return this;
    } 
});

var captionsView = new CaptionsView({collection:captions});

function takePic(){
    navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
    destinationType: Camera.DestinationType.FILE,
    //sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
    });
 }

function uploadImage(imageData){
    var serverURL = "http://192.168.1.37/index.php";
    var options = new FileUploadOptions();
    options.fileKey = 'file';
    options.fileName = imageData.substr(imageData.lastIndexOf('/')+1);

    var ft = new FileTransfer();
    ft.upload(imageData, serverURL, onUploadSuccess, onUploadError, options);
}

function onUploadSuccess(){
    alert('Photo Upload Successful!!');
}
function onUploadError(){
    alert('Error when uploading image...');
}

function chooseImage(){
    navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
    destinationType: Camera.DestinationType.FILE,
    sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
    });
}
 
function onSuccess(imageData) {
    var image = document.getElementById('myImage');
    image.src = imageData;
    uploadImage(imageData);
}

function onFail(message) {
    alert('Failed because: ' + message);
}


var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
