// Code under MIT License (see main license file).
// Typescript definition file for ArcGIS API for JavaScript Version 3.4
// Associated API : http://developers.arcgis.com/en/javascript/
// Git repo : https://github.com/frett27/esri_web_playground.git
// Email : fabrice.leray.dev(at)gmail(dot)com
// Email : frett27(at)gmail(dot)com
// Copyright (c) 2013 Fabrice Leray, Patrice Freydiere 


/// <reference path="../Dojo-TypeScript/dojo.d.ts" />
/// <reference path="../Dojo-TypeScript/dijit.d.ts" />

declare module esri {

    class esriNS {
		constructor();    
	    version: number;
    }

    interface graphicsUtils {
	    getGeometries(graphics : esri.Graphic[]): esri.geometry.Geometry[];
	    graphicsExtent(graphics: esri.Graphic[]): esri.geometry.Extent;
    }


    interface request {
		url : string;
		content? : Object;
		form? : Object;
		handleAs? : string;
		callbackParamName? : string;
		timeout? : number;			    
    }

    interface esriRequest {
	    (request: request, options?: Object): dojo.Deferred<any>;
	    setRequestPreCallback(callbackFunction : Function): void;
    }

	class domUtils {
	    constructor();    
		documentBox: Object;
	    hide(element : Element): void;
	    toggle(element : Element): void;
	    show(element : Element): void;
	}


	interface esriLang {
	    filter(object: Object, callback: Function, thisObject: Object): Object;
	    substitute(data : Object, template? : string, first? : boolean): void;
	    valueOf(array : Array<Object>, value : Object): Object;
	    isDefined(value : Object): boolean;
	}

	interface ProxyRule {
		proxyUrl : string;
		urlPrefix : string;
	}


	interface urlUtils {
	    urlToObject(url : string): Object;
	    addProxyRule(rule : ProxyRule): number;
	    getProxyRule(url : string): ProxyRule;
	}


    export class Credential {
        expires: string;
        isAdmin: boolean;
        server: string;
        ssl: boolean;
        token: string;
        userId: string;
        destroy(): void;
        refreshToken(): dojo.Deferred<any>;
        toJson(): Object;
        onDestroy(): void;
        onTokenChange(): void;
    }
    export class Graphic {
        constructor(geometry : esri.geometry.Geometry, symbol : esri.symbol.Symbol, attributes : Object, infoTemplate : esri.InfoTemplate);
        constructor(json : Object);
        attributes: Object;
        geometry: esri.geometry.Geometry;
        infoTemplate: InfoTemplate;
        symbol: esri.symbol.Symbol;
        visible: boolean;
        getContent(): string;
        // getDojoShape(): Dojo.gfx.shape.Shape;
        getInfoTemplate(): esri.InfoTemplate;
        getLayer(): esri.layers.GraphicsLayer;
        getTitle(): string;
        hide(): void;
        setAttributes(attributes : Object): Graphic;
        setGeometry(geometry : esri.geometry.Geometry): Graphic;
        setInfoTemplate(infoTemplate : esri.InfoTemplate): Graphic;
        setSymbol(symbol : esri.symbol.Symbol): Graphic;
        show(): void;
        toJson(): Object;
    }
    export class IdentityManager extends IdentityManagerBase {
        esriSignInDialog: string;
        dialog: any; //dijit.Dialog;
        onDialogCancel(info : Object): void;
        onDialogCreate(): void;
        //dialogcancel: Object; // Event
        //dialogcreate: void;
    }
    export class IdentityManagerBase {
        tokenValidity: number;
        findCredential(url : string, userId? : string): Credential;
        findServerInfo(url : string): esri.ServerInfo;
        generateToken(serverInfo : esri.ServerInfo, userInfo : Object, options? : Object): dojo.Deferred<any>;
        getCredential(url : string, options? : Object): dojo.Deferred<any>;
        initialize(json : Object): Object;
        isBusy(): boolean;
        registerServers(serverInfos : esri.ServerInfo[]): void;
        registerToken(properties : Object): void;
        setProtocolErrorHandler(handlerFunction : Function): void;
        setRedirectionHandler(handler : Object): void;
        signIn(url : string, serverInfo : esri.ServerInfo, options : Object): dojo.Deferred<any>;
        toJson(): Object;
    }
    export class InfoTemplate {
        constructor();
        constructor(title : string, content : string);
        constructor(json : Object);
        content: any; // String|Function
        title: any; // String|Function
        setContent(template: string): esri.InfoTemplate;
        setContent(template: Function): esri.InfoTemplate;
        setTitle(template: string): esri.InfoTemplate;
        setTitle(template: Function): esri.InfoTemplate;
        toJson(): Object;
    }
    export class InfoWindowBase {
        domNode: Object;
        isShowing: boolean;
        destroyDijits(): void;
        hide(): void;
        place(value: string, parentNode: any): void;
        place(value: any, parentNode: any): void;
        resize(width : number, height : number): void;
        setContent(content: string): void;
        setContent(content: Object): void;
        setMap(map : esri.Map): void;
        setTitle(title: string): void;
        setTitle(title: Object): void;
        show(location : esri.geometry.Point): void;
        startupDijits(): void;
        unsetMap(map : esri.Map): void;
        onHide(): void;
        onShow(): void;
    }



	interface ExtentEvent extends Event {
		
        // onExtentChange(extent: esri.geometry.Extent, delta: esri.geometry.Point, levelChange: boolean, lod : esri.layers.LOD): void;
		extent : esri.geometry.Extent;
		delta : esri.geometry.Point;
		levelChange : boolean;
		lod : esri.layers.LOD;

    }


    interface MouseEvent2 extends MouseEvent {
        // Cf. https://developers.arcgis.com/en/javascript/jsapi/map.html#click
        // 	"A standard DOM MouseEvent with additional properties such as mapPoint and screenPoint"
        mapPoint: esri.geometry.Point;
        screenPoint: esri.geometry.Point;
    }



    export class Map { // we can't extends the dijit._Widget because of a compiler bug, see : https://github.com/schungx/Dojo-TypeScript/issues/2
		// in that case, we have to define the base methods
        constructor(divId, options?: Object);
        esriAttribution: string;
        esriAttributionOpen: string;
        attribution: esri.dijit.Attribution;
        autoResize: boolean;
        extent: esri.geometry.Extent;
        fadeOnZoom: boolean;
        force3DTransforms: boolean;
        geographicExtent: esri.geometry.Extent;
        graphics: esri.layers.GraphicsLayer;
        graphicsLayerIds: string[];
        height: number;
        id: string;
        infoWindow: esri.dijit.Popup;
        isClickRecenter: boolean;
        isDoubleClickZoom: boolean;
        isKeyboardNavigation: boolean;
        isPan: boolean;
        isPanArrows: boolean;
        isRubberBandZoom: boolean;
        isScrollWheelZoom: boolean;
        isShiftDoubleClickZoom: boolean;
        isZoomSlider: boolean;
        layerIds: string[];
        loaded: boolean;
        navigationMode: string;
        position: esri.geometry.Point;
        root: any; //DOMNode;
        showAttribution: boolean;
        snappingManager: esri.SnappingManager;
        spatialReference: esri.SpatialReference;
        timeExtent: esri.TimeExtent;
        width: number;
        addLayer(layer : esri.layers.Layer, index?: number): esri.layers.Layer;
        addLayers(layers: esri.layers.Layer[]): void;
        centerAndZoom(mapPoint : esri.geometry.Point, levelOrFactor : number): dojo.Deferred<any>;
        centerAt(mapPoint : esri.geometry.Point): dojo.Deferred<any>;
        destroy(): void;
        disableClickRecenter(): void;
        disableDoubleClickZoom(): void;
        disableKeyboardNavigation(): void;
        disableMapNavigation(): void;
        disablePan(): void;
        disableRubberBandZoom(): void;
        disableScrollWheelZoom(): void;
        disableShiftDoubleClickZoom(): void;
        disableSnapping(): void;
        enableClickRecenter(): void;
        enableDoubleClickZoom(): void;
        enableKeyboardNavigation(): void;
        enableMapNavigation(): void;
        enablePan(): void;
        enableRubberBandZoom(): void;
        enableScrollWheelZoom(): void;
        enableShiftDoubleClickZoom(): void;
        enableSnapping(snapOptions : Object): SnappingManager;
        getBasemap(): string;
        getInfoWindowAnchor(screenCoords : esri.geometry.Point): void;
        getLayer(id : string): esri.layers.Layer ;
        getLayersVisibleAtScaleRange(scale : number): esri.layers.Layer[];
        getLevel(): void;
        getMaxScale(): number;
        getMaxZoom(): number;
        getMinScale(): number;
        getMinZoom(): number;
        getScale(): number;
        getZoom(): number;
        hidePanArrows(): void;
        hideZoomSlider(): void;
        panDown(): dojo.Deferred<any>;
        panLeft(): dojo.Deferred<any>;
        panLowerLeft(): dojo.Deferred<any>;
        panLowerRight(): dojo.Deferred<any>;
        panRight(): dojo.Deferred<any>;
        panUp(): dojo.Deferred<any>;
        panUpperLeft(): dojo.Deferred<any>;
        panUpperRight(): dojo.Deferred<any>;
        removeAllLayers(): void;
        removeLayer(layer : esri.layers.Layer): void;
        reorderLayer(layer: esri.layers.Layer, index : number): void;
        reposition(): void;
        resize(immediate? : boolean): void;
        setBasemap(basemap : string): void;
        setExtent(extent : esri.geometry.Extent, fit? : boolean): dojo.Deferred<any>;
        setLevel(level : number): void;
        setMapCursor(cursor : string): void;
        setScale(scale): dojo.Deferred<any>;
        setTimeExtent(timeExtent : esri.TimeExtent): void;
        setTimeSlider(timeSlider : esri.dijit.TimeSlider): void;
        setZoom(zoom : number): dojo.Deferred<any>;
        showPanArrows(): void;
        showZoomSlider(): void;
        // toMap(screenPoint: esri.geometry.Point): esri.geometry.Point; // deprecated since version 3.3
        toMap(screenPoint: esri.geometry.ScreenPoint): esri.geometry.Point;
        toScreen(mapPoint: esri.geometry.Point): esri.geometry.ScreenPoint; // fleray : ESRI documentation has errors here I suppose... (Point is mentionned instead of ScreenPoint)
        onBasemapChange(): void;
        onClick(event : Object): void;
        onDblClick(event : Object): void;
        onExtentChange(extent: esri.geometry.Extent, delta: esri.geometry.Point, levelChange: boolean, lod : esri.layers.LOD): void;
        onKeyDown(keyEvent : Object): void;
        onKeyUp(keyEvent : Object): void;
        onLayerAdd(layer : esri.layers.Layer): void;
        onLayerAddResult(layer: esri.layers.Layer, error : Error): void;
        onLayerRemove(): void;
        onLayerReorder(layer: esri.layers.Layer, index : number): void;
        onLayerResume(layer : esri.layers.Layer): void;
        onLayerSuspend(layer : esri.layers.Layer): void;
        onLayersAddResult(results : Object[]): void;
        onLayersRemoved(): void;
        onLayersReordered(layerIds : string[]): void;
        onLoad(map : esri.Map): void;
        onMouseDown(event : Object): void;
        onMouseDrag(event : Object): void;
        onMouseDragEnd(event : Object): void;
        onMouseDragStart(event : Object): void;
        onMouseMove(event : Object): void;
        onMouseOut(event : Object): void;
        onMouseOver(event : Object): void;
        onMouseUp(event : Object): void;
        onMouseWheel(event : Object): void;
        onPan(extent : esri.geometry.Extent, delta : esri.geometry.Point): void;
        onPanEnd(extent: esri.geometry.Extent, delta: esri.geometry.Point): void;
        onPanStart(extent: esri.geometry.Extent, startPoint: esri.geometry.Point): void;
        onReposition(x : number, y : number): void;
        onResize(extent, width : number, height : number): void;
        onTimeExtentChange(timeExtent : esri.TimeExtent): void;
        onUnload(map : esri.Map): void;
        onUpdateEnd(): void;
        onUpdateStart(): void;
        onZoom(extent : esri.geometry.Extent, zoomFactor : number, anchor : esri.geometry.Point): void;
        onZoomEnd(extent : esri.geometry.Extent, zoomFactor : number, anchor : esri.geometry.Point, level : number): void;
        onZoomStart(extent: esri.geometry.Extent, zoomFactor: number, anchor: esri.geometry.Point, level: number): void;
        //basemap-change : void;
        //click : <MouseEvent> <MouseEvent>;
        //dbl-click : <MouseEvent> <MouseEvent>;
        //extent-change : esri.geometry.Extent;
        on(name: "dbl-click", listener: (mev: MouseEvent2) => void): Dojo.RemovableHandle;
		on(name : "extent-change", listener : (ev:ExtentEvent) =>void):Dojo.RemovableHandle;
        //key-down : <KeyboardEvent> <KeyboardEvent>;
        //key-up : <KeyboardEvent> <KeyboardEvent>;
        //layer-add : Layer;
        //layer-add-result : Layer;
        //layer-add-result : Layer;
        //layer-remove : Layer;
        //layer-reorder : Layer;
        //layer-resume : Layer;
        //layers-add-result : void;
        //layers-removed : void;
        //layers-reordered : <number[]> layerIds;
        //load : Map;
        //mouse-down : <MouseEvent> <MouseEvent>;
        //mouse-drag : <MouseEvent> <MouseEvent>;
        //mouse-drag-end : <MouseEvent> <MouseEvent>;
        //mouse-drag-start : <MouseEvent> <MouseEvent>;
        //mouse-move : <MouseEvent> <MouseEvent>;
        //mouse-out : <MouseEvent> <MouseEvent>;
        //mouse-over : <MouseEvent> <MouseEvent>;
        //mouse-up : <MouseEvent> <MouseEvent>;
        //mouse-wheel : <MouseEvent> <MouseEvent>;
        //pan : esri.geometry.Extent;
        //pan-end : esri.geometry.Point;
        //pan-start : esri.geometry.Extent;
        //reposition : <number> x;
        //resize : esri.geometry.Extent;
        //time-extent-change : TimeExtent;
        //unload : Map;
        //update-end : <Error> error;
        //update-start : void;
        //zoom : esri.geometry.Extent;
        //zoom-end : esri.geometry.Extent;
        //zoom-start : esri.geometry.Extent;
		on(type: string, listener: Dojo.Action): Dojo.RemovableHandle;
    }
    export class OperationBase {
        constructor(params : Object);
        label: string;
        type: string;
        performRedo(): void;
        performUndo(): void;
    }
    export class ServerInfo {
        adminTokenServiceUrl: string;
        currentVersion: number;
        server: string;
        shortLivedTokenValidity: number;
        tokenServiceUrl: string;
        toJson(): Object;
    }
    export class SnappingManager {
        constructor(options?: Object);
        destroy(): void;
        getSnappingPoint(screenPoint: esri.geometry.ScreenPoint): dojo.Deferred<any>;
        setLayerInfos(layerInfos : Object[]): void;
    }
    export class SpatialReference {
        constructor(json : Object);
        constructor(wkid: number);
        constructor(wkt: string);
        wkid: number;
        wkt: string;
        equals(sr : esri.SpatialReference): boolean;
        isWebMercator(): boolean;
        toJson(): Object;
    }
    export class TimeExtent {
        constructor(startTime: esri.tasks.Date, endTime: esri.tasks.Date);
        endTime: esri.tasks.Date;
        startTime: esri.tasks.Date;
        intersection(timeExtent : number): esri.TimeExtent;
        offset(offsetValue : number, offsetUnits : string): esri.TimeExtent;
    }
    export class UndoManager {
        constructor(options : Object);
        canRedo: boolean;
        canUndo: boolean;
        length: number;
        position: number;
        add(operation : esri.OperationBase) : void;
        clearRedo() : void;
        clearUndo() : void;
        destroy() : void;
        get(operation): esri.OperationBase;
        peekRedo(): esri.OperationBase;
        peekUndo(): esri.OperationBase;
        redo() : void;
        remove(operation): esri.OperationBase;
        undo() : void;
        onAdd(): void;
        onChange(): void;
        onRedo(): void;
        onUndo(): void;
        //add : void; // Events
        //change : void;
        //redo : void;
        //undo : void;
    }
    export class Units {
        CENTIMETERS: string;
        DECIMAL_DEGREES: string;
        DECIMETERS: string;
        FEET: string;
        INCHES: string;
        KILOMETERS: string;
        ACRES: string;
        METERS: string;
        ARES: string;
        MILES: string;
        SQUARE_KILOMETERS: string;
        MILLIMETERS: string;
        SQUARE_MILES: string;
        NAUTICAL_MILES: string;
        POINTS: string;
        SQUARE_FEET: string;
        UNKNOWN: string;
        SQUARE_METERS: string;
        YARDS: string;
        HECTARES: string;
        SQUARE_YARDS: string;
        SQUARE_INCHES: string;
        SQUARE_MILLIMETERS: string;
        SQUARE_CENTIMETERS: string;
        SQUARE_DECIMETERS: string;
    }
}

declare module "esri/kernel" {
	var i : esri.esriNS;
	export = i;
}


declare module "esri/lang" {
	var i : esri.esriLang;
	export = i;
}

declare module "esri/graphicsUtils" {
	var i : esri.graphicsUtils;
	export = i;
}

declare module "esri/urlUtils" {
	var i : esri.urlUtils;
	export = i;
}

declare module "esri/request" {
	var i : esri.esriRequest;
	export = i;
}

declare module "esri/domUtils" {
	var i : esri.domUtils;
	export = i;
}


declare module esri {

	interface esriConfigIo {
		alwaysUseProxy : boolean;
		corsDetection : boolean;
		corsEnabledServers : Array<string>;
		proxyRules : Array<ProxyRule>;
		proxyUrl : string;
		timeout : number;
		useCors : boolean;
		
	}

	interface esriConfigMap {
		basemaps : any;
		panDuration : number;
		panRate : number;
		slider : Object;
		sliderLabel : Object;
		zoomDuration : number;
		zoomRate : number;
		zoomSymbol : esri.symbol.SimpleFillSymbol;
	}

	interface esriConfigDefaults {
		
		geometryService : esri.tasks.GeometryService;
		io : esriConfigIo;
		map : esriConfigMap;
	
	}



	interface esriConfig {

		defaults : esriConfigDefaults;

	}



}


declare module "esri/config" { // not typed for the moment
	var i : esri.esriConfig;
	export = i;
}

declare module "esri/units" {
	var i : esri.Units;
	export = i;
}

declare module "esri/geometry/webMercatorUtils" {
	var i : esri.geometry.webMercatorUtils;
	export = i;
}

declare module "esri/geometry/scaleUtils" {
	var i : esri.geometry.scaleUtils;
	export = i;
}

declare module "esri/geometry/jsonUtils" {
	var i : esri.geometry.jsonUtils;
	export = i;
}

declare module "esri/geometry/screenUtils" {
	var i : esri.geometry.screenUtils;
	export = i;
}

declare module "esri/geometry/mathUtils" {
	var i : esri.geometry.mathUtils;
	export = i;
}

declare module "esri/geometry/geodesicUtils" {
	var i : esri.geometry.geodesicUtils;
	export = i;
}

declare module "esri/geometry/normalizeUtils" {
	var i : esri.geometry.normalizeUtils;
	export = i;
}

declare module "esri.symbol.jsonUtils" {
	var i : esri.symbol.jsonUtils;
	export = i;
}

declare module "esri/renderers/jsonUtils" {
	var i : esri.renderer.jsonUtils;
	export = i;
}


declare module "esri/arcgis/utils" {
	var i : esri.arcgis.utils;
	export = i;

}

declare module esri.arcgis {
    export class utils {
        arcgisUrl: string;
        createMap(itemId: string, mapDiv: string, options?: Object): dojo.Deferred<any>;
        createMap(itemInfo: Object, mapDiv: string, options?: Object): dojo.Deferred<any>;
        getItem(itemId : string): dojo.Deferred<any>;
        getLegendLayers(): Array<Object>;   
    }

    export class Portal {
        constructor(url:  string);
        access: string;
        allSSL: boolean;
        basemapGalleryGroupQuery: string;
        canSearchPublic: boolean;
        canSharePublic: boolean;
        created: Date;
        culture: string;
        defaultBasemap: Object;
        defaultExtent: Object;
        description: string;
        featuredGroups: Object[];
        featuredItemsGroupQuery: string;
        id: string;
        isOrganization: boolean;
        layerTemplatesGroupQuery: string;
        modified: Date;
        name: string;
        portalMode: string;
        portalName: string;
        symbolSetsGroupQuery: string;
        templatesGroupQuery: string;
        thumbnailUrl: string;
        url: string;
        getPortalUser(): PortalUser;
        queryGroups(queryParams : esri.arcgis.PortalQueryParams): dojo.Deferred<any>;
        queryItems(queryParams : esri.arcgis.PortalQueryParams): dojo.Deferred<any>;
        queryUsers(queryParams : esri.arcgis.PortalQueryParams): dojo.Deferred<any>;
        signIn(): dojo.Deferred<any>;
        signOut(): Portal;
        onLoad(): void;
    }
    export class PortalComment {
        comment: string;
        created: string;
        id: string;
        owner: string;
    }
    export class PortalFolder {
        created: Date;
        id: string;
        portal: Portal;
        title: string;
        url: string;
        getItems(): dojo.Deferred<any>;
    }
    export class PortalGroup {
        access: string;
        created: Date;
        description: string;
        id: string;
        isInvitationOnly: boolean;
        isViewOnly: boolean;
        modified: Date;
        owner: Portal;
        portal: Portal;
        snippet: string;
        tags: string;
        thumbnailUrl: string;
        title: string;
        url: string;
        getMembers(): dojo.Deferred<any>;
        queryItems(queryParams): dojo.Deferred<any>;
    }
    export class PortalGroupMembers {
        admins: string[];
        owner: string;
        users: string[];
    }
    export class PortalItem {
        access: string;
        accessInformation: string;
        avgRating: number;
        created: Date;
        culture: string;
        description: string;
        extent: Object;
        id: string;
        itemDataUrl: string;
        itemUrl: string;
        licenseInfo: string;
        modified: Date;
        name: string;
        numComments: number;
        numRatings: number;
        numViews: number;
        owner: string;
        portal: Portal;
        size: number;
        snippet: string;
        spatialReference: string;
        tags: string[];
        thumbnailUrl: string;
        title: string;
        type: string;
        typeKeywords: string[];
        url: string;
        userItemUrl: string;
        addComment(comment : string): dojo.Deferred<any>;
        addRating(rating : number): void;
        deleteComment(comment: string): void;
        deleteRating(rating : esri.arcgis.PortalRating): dojo.Deferred<any>;
        getComments(): dojo.Deferred<any>;
        getRating(): dojo.Deferred<any>;
        updateComment(comment : esri.arcgis.PortalComment): void;
    }
    export class PortalQueryParams {
        num: string;
        q: string;
        sortField: string;
        start: string;
    }
    export class PortalQueryResult {
        nextQueryParams: PortalQueryParams;
        queryParams: PortalQueryParams;
        results: Object[];
        total: number;
    }
    export class PortalRating {
        created: Date;
        rating: number;
    }
    export class PortalUser {
        access: string;
        created: Date;
        culture: string;
        description: string;
        email: string;
        fullName: string;
        modified: Date;
        orgId: string;
        portal: Portal;
        preferredView: string;
        region: string;
        role: string;
        tags: string[];
        thumbnailUrl: string;
        userContentUrl: string;
        username: string;
        getFolders(): dojo.Deferred<any>;
        getGroupInvitations(): dojo.Deferred<any>;
        getGroups(): dojo.Deferred<any>;
        getItem(itemId): PortalItem;
        getItems(folderId): dojo.Deferred<any>;
        getNotifications(): dojo.Deferred<any>;
        getTags(): dojo.Deferred<any>;
    }
}

declare module esri.dijit.editing {
    export class AttachmentEditor {
        constructor(params : Object, srcNodeRef : string);
        showAttachments(graphic : esri.Graphic, featureLayer : esri.layers.FeatureLayer): void;
        startup(): void;
    }
}
declare module esri.dijit {
    export class AttributeInspector {
        constructor(params : Object, srcNodeRef : string);
        STRING_FIELD_OPTION_TEXTBOX: string;
        STRING_FIELD_OPTION_TEXTAREA: string;
        STRING_FIELD_OPTION_RICHTEXT: string;
        esriAttributeInspector: string;
        atiLayerName: string;
        atiField: string;
        atiLabel: string;
        atiNavMessage: string;
        atiButtons: string;
        atiNavButtons: string;
        atiButton: string;
        Icons: string;
        attachmentEditor: string;
        atiRichTextField: string;
        atiTextAreaField: string;
        atiEditorTrackingInfo: string;
        destroy(): void;
        first(): void;
        last(): void;
        next(): void;
        previous(): void;
        refresh(): void;
        onAttributeChange(feature : esri.Graphic, fieldName : string, fieldValue : string): void;
        onDelete(feature : esri.Graphic): void;
        onNext(feature : esri.Graphic): void;
    }
    export class Attribution {
        constructor(options : Object, srcNodeRef : string);
        esriAttributionList: string;
        esriAttributionItem: string;
        esriAttributionLastItem: string;
        esriAttributionDelim: string;
        itemDelimiter: string;
        itemNodes: HTMLSpanElement;
        listNode: HTMLSpanElement;
        map: Map;
        destroy(): void;
    }
    export class Basemap {
        constructor(params? : Object);
        id: string;
        thumbnailUrl: string;
        title: string;
        getLayers(): BasemapLayer[];
    }
    export class BasemapGallery {
        constructor(params : Object, srcNodeRef? : string);
        esriBasemapGallery: string;
        esriBasemapGalleryNode: string;
        esriBasemapGallerySelectedNode: string;
        esriBasemapGalleryThumbnail: string;
        basemaps: Basemap[];
        loaded: boolean;
        add(basemap : esri.dijit.Basemap): boolean;
        destroy(): void;
        get(id : string): Basemap;
        getSelected(): Basemap;
        remove(id : string): Basemap;
        select(id : string): Basemap;
        startup(): void;
        onAdd(basemap : esri.dijit.Basemap): void;
        onError(): void;
        onLoad(): void;
        onRemove(basemap: esri.dijit.Basemap): void;
        onSelectionChange(): void;
    }
    export class BasemapLayer {
        constructor(params? : Object);
    }
    export class BookmarkItem {
        constructor(name : string, extent : esri.geometry.Extent);
    }
    export class Bookmarks {
        constructor(params : Object, srcNodeRef : Object);
        esriBookmarks: string;
        esriBookmarkTable: string;
        esriBookmarkItem: string;
        esriBookmarkLabel: string;
        esriBookmarkRemoveImage: string;
        esriBookmarkEditImage: string;
        esriBookmarkEditBox: string;
        esriAddBookmark: string;
        esriBookmarkHighlight: string;
        bookmarks: BookmarkItem;
        addBookmark(bookmarkItem : esri.dijit.BookmarkItem): void;
        destroy(): void;
        hide(): void;
        removeBookmark(bookmarkName : string): void;
        show(): void;
        toJson(): Object;
        onClick(): void;
        onEdit(): void;
        onRemove(): void;
    }
    export class Directions {
        constructor(params : Object, srcNodeRef : string);
        esriDirectionsContainer: string;
        esriStopsContainer: string;
        esriStopsReverse: string;
        esriStopsAdd: string;
        esriStops: string;
        esriStopsRemovable: string;
        esriStopsButtons: string;
        esriStopsAddDestination: string;
        esriStopsGetDirectionsContainer: string;
        esriStopsGetDirections: string;
        esriStop: string;
        esriStopsOptionsEnabled: string;
        esriStopsOptionsMenu: string;
        esriFindOptimalOrderOption: string;
        esriStopOrigin: string;
        esriStopDestination: string;
        esriStopGeocoderColumn: string;
        esriStopReverseColumn: string;
        esriStopIconColumn: string;
        esriStopIcon: string;
        esriStopIconRemoveColumn: string;
        esriStopIconRemove: string;
        esriResultsContainer: string;
        esriResultsLoading: string;
        esriResultsPrint: string;
        esriResultsSummary: string;
        esriResultsViewFullRoute: string;
        esriResultsRouteName: string;
        esriResultsButtonsContainer: string;
        esriRoutesContainer: string;
        esriRoutes: string;
        esriRoutesError: string;
        esriRoute: string;
        esriRouteTextColumn: string;
        esriRouteText: string;
        esriRouteLength: string;
        esriRouteOrigin: string;
        esriRouteInfo: string;
        esriRouteIconColumn: string;
        esriRouteIcon: string;
        esriInfoWindowRoute: string;
        esriPrintPage: string;
        esriPrintBar: string;
        esriPrintButton: string;
        esriPrintMain: string;
        esriPrintHeader: string;
        esriPrintLogo: string;
        esriPrintName: string;
        esriPrintFooter: string;
        directions: esri.tasks.DirectionsFeatureSet;
        geocoderResults: Object[];
        maxStopsReached: boolean;
        mergedRouteGraphic: Graphic;
        stops: Graphic[];
        theme: string;
        addStop(stop: esri.geometry.Point, index: number): dojo.Deferred<any>;
        addStops(stops: Array<string>, index: number): dojo.Deferred<any>; // An array of strings or point that defines the input stops.
        addStops(stops: Array<esri.geometry.Point>, index: number): dojo.Deferred<any>; // An array of strings or point that defines the input stops.
        centerAtSegmentStart(index : number): void;
        clearDirections(): void;
        destroy(): void;
        getDirections(): dojo.Deferred<any>;
        highlightSegment(index : number): void;
        removeStop(index : number): dojo.Deferred<any>;
        removeStops(): void;
        reset(): void;
        startup(): void;
        unhighlightSegment(): void;
        updateStop(stop : string, index: number): dojo.Deferred<any>;
        updateStop(stop : esri.geometry.Point, index: number): dojo.Deferred<any>;
        updateStops(stops: Array<esri.geometry.Point>): dojo.Deferred<any>;
        zoomToFullRoute(): void;
        zoomToSegment(index : number): void;
        onDirectionsClear(): void;
        onDirectionsFinish(result : esri.tasks.RouteResult): void;
        onDirectionsStart(): void;
        onLoad(): void;
        onSegmentHighlight(graphic : esri.Graphic): void;
        onSegmentSelect(graphic : esri.Graphic): void;
    }
    export class Editor {
        constructor(params : Object, srcNodeRef : Object);
        CREATE_TOOL_FREEHAND_POLYGON: string;
        CREATE_TOOL_POLYGON: string;
        CREATE_TOOL_AUTOCOMPLETE: string;
        CREATE_TOOL_FREEHAND_POLYLINE: string;
        CREATE_TOOL_POLYLINE: string;
        CREATE_TOOL_ARROW: string;
        CREATE_TOOL_TRIANGLE: string;
        CREATE_TOOL_RECTANGLE: string;
        CREATE_TOOL_CIRCLE: string;
        CREATE_TOOL_ELLIPSE: string;
    }
    export class Gallery {
        constructor(params : Object, srcNodeRef : string);
        esriMobileGallery: string;
        //esriMobileGallery.galleryLandscape : string; // TODO FLE : remove CSS Stuff
        //esriMobileGallery.thumbnailContainer : string;
        //esriMobileGallery .thumbnailContainer.small : string;
        //esriMobileGallery .thumbnail : string;
        //esriMobileGallery.thumbnail.selected : string;
        //esriMobileGallery .thumbnail.small : string;
        //esriMobileGallery.thumbnail.small.selected : string;
        //esriMobileGallery.title : string;
        //esriMobileGallery.title.small : string;
        destroy(): void;
        getFocusedItem(): Object;
        getSelectedItem(): Object;
        next(): void;
        previous(): void;
        select(item : Object): void;
        setFocus(item : Object): void;
        startup(): void;
        onFocus(item : Object): void;
        onSelect(item : Object): void;
    }
    export class Gauge {
        constructor(params : Object, srcNodeRef : string);
        gaugeContainer: string;
        destroy(): void;
        get(): any; //varies;
        set(): any; //varies;
        startup(): void;
    }
    export class Geocoder {
        constructor(params: Object, srcNodeRef: string);
        constructor(params: Object, srcNodeRef: Node);
        esriGeocoder: string;
        esriGeocoderMultiple: string;
        esriGeocoderContainer: string;
        esriGeocoderIcon: string;
        esriGeocoderActive: string;
        esriGeocoderLoading: string;
        esriGeocoderResults: string;
        esriGeocoderResult: string;
        esriGeocoderResultEven: string;
        esriGeocoderResultOdd: string;
        esriGeocoderResultFirst: string;
        esriGeocoderResultLast: string;
        esriGeocoderResultPartial: string;
        esriGeocoderSearch: string;
        esriGeocoderReset: string;
        esriGeocoderMenu: string;
        esriGeocoderMenuHeader: string;
        esriGeocoderMenuClose: string;
        esriGeocoderMenuActive: string;
        esriGeocoderMenuArrow: string;
        esriGeocoderSelected: string;
        esriGeocoderSelectedCheck: string;
        esriGeocoderClearFloat: string;
        esriGeocoderHasValue: string;
        activeGeocoder: Object;
        activeGeocoderIndex: number;
        autoComplete: boolean;
        autoNavigate: boolean;
        geocoder: Object[];
        geocoderMenu: boolean;
        maxLocations: number;
        minCharacters: number;
        results: Object[];
        searchDelay: number;
        showResults: boolean;
        theme: string;
        value: string;
        blur(): void;
        clear(): void;
        destroy(): void;
        find(): dojo.Deferred<any>;
        focus(): void;
        hide(): void;
        select(result : Object): void;
        show(): void;
        startup(): void;
        onAutoComplete(results : Object): void;
        onClear(): void;
        onFindResults(results: Object): void;
        onGeocoderSelect(geocoder: Object): void;
        onSelect(results: Object): void;
    }
    export class InfoWindow extends InfoWindowBase {
        constructor(params: Object, srcNodeRef: string);
        constructor(params: Object, srcNodeRef: Node);
        ANCHOR_UPPERRIGHT: string;
        ANCHOR_LOWERRIGHT: string;
        ANCHOR_LOWERLEFT: string;
        ANCHOR_UPPERLEFT: string;
        anchor: string;
        coords: esri.geometry.Point;
        domNode: Object;
        fixedAnchor: string;
        isShowing: boolean;
        destroyDijits(): void;
        hide(): void;
        move(point : esri.geometry.Point): void;
        place(value: string, parentNode: Node): void;
        place(value: Node, parentNode: Node): void;
        resize(width : number, height : number): void;
        setContent(content: string): InfoWindow;
        setContent(content: Object): InfoWindow;
        setFixedAnchor(anchor : string): void;
        setMap(map : esri.Map): void;
        setTitle(title: string): InfoWindow;
        setTitle(title: Object): InfoWindow;
        show(point: esri.geometry.Point): void;
        show(point: esri.geometry.Point, location : esri.geometry.Point, placement? : string): void;
        startupDijits(): void;
        unsetMap(map : esri.Map): void;
        onHide(): void;
        onShow(): void;
    }
    export class Legend {
        constructor(srcNodeRef : string, params : Object); // TO CHECK : in esri code sample parameters are inversed..??
        esriLegendService: string;
        esriLegendServiceLabel: string;
        esriLegendGroupLayer: string;
        esriLegendLayerLabel: string;
        esriLegendLayer: string;
        destroy(): void;
        refresh(): void;
        startup(): void;
    }
    export class Measurement {
        constructor(params : Object, srcNodeRef : string);
        distanceIcon: string;
        areaIcon: string;
        locationIcon: string;
        unitDropDown: string;
        resultLabel: string;
        result: string;
        clearResult(): void;
        destroy(): void;
        hide(): void;
        hideTool(toolName : string): void;
        setTool(toolName : string, activate : boolean): void;
        show(): void;
        showTool(toolName : string): void;
        startup(): void;
        onMeasureEnd(activeToolName : string, geometry : esri.geometry.Geometry): void;
    }
    export class OverviewMap {
        constructor(params : Object, srcNodeRef : Object);
        destroy(): void;
        hide(): void;
        show(): void;
        startup(): void;
    }
    export class Popup extends InfoWindowBase {
        constructor(options: Object, srcNodeRef : string);
        count: number;
        deferreds: dojo.Deferred<Graphic>[];
        domNode: Object;
        features: Graphic[];
        isShowing: boolean;
        selectedIndex: number;
        clearFeatures(): void;
        destroy(): void;
        destroyDijits(): void;
        getSelectedFeature(): Graphic;
        hide(): void;
        maximize(): void;
        place(value : string, parentNode : Node): void;
        place(value : Node, parentNode : Node): void;
        reposition(): void;
        resize(width: number, height: number): void;
        restore(): void;
        select(index : number): void;
        setContent(content: string): void;
        setContent(content: Object): void;
        setContent(content: Function): void;
        setFeatures(features : esri.Graphic[]): esri.Graphic[];
        setFeatures(features : dojo.Deferred<Graphic>[]): dojo.Deferred<Graphic>[];
        setMap(map : esri.Map): void;
        setTitle(title: string): void;
        show(location : esri.geometry.Point, options?: Object): void;
        startupDijits(): void;
        unsetMap(map : esri.Map): void;
        onClearFeatures(): void;
        onHide(): void;
        onMaximize(): void;
        onRestore(): void;
        onSelectionChange(): void;
        onSetFeatures(): void;
        onShow(): void;
    }
    export class PopupMobile extends InfoWindowBase {
        constructor(options: Object, srcNodeRef : string);
        constructor(options: Object, srcNodeRef : Node);
        titlePane: string;
        //pointer.top : string;
        //pointer.bottom : string;
        //esriMobileNavigationBar: string;
        clearFeatures(): void;
        destroy(): void;
        getSelectedFeature(): Graphic;
        hide(): void;
        select(index): void;
        setContent(content : string): void;
        setContent(content : Function): void;
        setFeatures(features : esri.Graphic[]): esri.Graphic[];
        setFeatures(features : dojo.Deferred<Graphic>[]): dojo.Deferred<Graphic>[];
        setTitle(title : string): void;
        show(location : esri.geometry.Point): void;
        onClearFeatures(): void;
        onHide(): void;
        onSelectionChange(): void;
        onSetFeatures(): void;
        onShow(): void;
    }
    export class PopupTemplate extends InfoTemplate {
        constructor(popupInfo : Object, options? : Object);
        info: Object;
    }
    export class Print {
        constructor(params : Object, srcNodeRef : Object);
        esriPrint: string;
        esriPrintButton: string;
        esriPrintout: string;
        destroy(): void;
        hide(): void;
        show(): void;
        startup(): void;
        onError(error): void;
        onPrintComplete(value : Object): void;
        onPrintStart(): void;
    }
    export class Scalebar {
        constructor(params : Object, srcNodeRef? : string);
        esriScalebar: string;
        esriScalebarRuler: string;
        esriScalebarLabel: string;
        esriScalebarRulerBlock: string;
        esriScalebarLine: string;
        destroy(): void;
        hide(): void;
        show(): void;
    }
    export class TemplatePicker {
        constructor(params : Object, srcNodeRef : Object);
        templatePicker: string;
        // grid : string; // TODO FLE : remove all CSS stuff !!!
        groupLabel: string;
        item: string;
        itemLabel: string;
        itemSymbol: string;
        selectedItem: string;
        // tooltip : string; // TODO FLE : remove all CSS stuff !!!
        // grid: Dojo.grid.DataGrid;
        tooltip: any; //div;
        attr(name : string, value? : Object): void;
        clearSelection(): void;
        destroy(): void;
        getSelected(): Object;
        startup(): void;
        update(): void;
        onSelectionChange(): void;
    }
    export class TimeSlider {
        constructor(params: string, srcNodeRef: Object);
        loop: boolean;
        playing: boolean;
        thumbCount: number;
        thumbMovingRate: number;
        timeStops: Date[];
        createTimeStopsByCount(timeExtent: esri.TimeExtent, count?: number): void;
        createTimeStopsByTimeInterval(timeExtent: esri.TimeExtent, timeInterval?: number, timeIntervalUnits?: string): void;
        getCurrentTimeExtent(): TimeExtent;
        next(): void;
        pause(): void;
        play(): void;
        previous(): void;
        setLabels(labels: string[]): void;
        setLoop(loop: boolean): void;
        setThumbCount(thumbCount: number): void;
        setThumbIndexes(indexes: Array<number>): void;
        setThumbMovingRate(thumbMovingRate: number): void;
        setTickCount(count: number): void;
        setTimeStops(timeStops: Date[]): void;
        singleThumbAsTimeInstant(createTimeInstants : boolean): void;
        onTimeExtentChange(timeExtent : esri.TimeExtent): void;
    }
}

declare module esri.geometry {

	interface webMercatorUtils {
		lngLatToXY(long : number,lat : number,isLinear : boolean) : number[];
		webMercatorToGeographic(geometry: esri.geometry.Geometry) : esri.geometry.Geometry;
		xyToLngLat(long : number,lat : number) : number[];
		geographicToWebMercator(geometry : esri.geometry.Geometry) : esri.geometry.Geometry;
	}

	interface scaleUtils {
		getScale(map : esri.Map) : number;
		getExtentForScale(map : esri.Map, scale : number) : esri.geometry.Extent;
	}

	interface jsonUtils {
		getJsonType(geometry : esri.geometry.Geometry) : string;
		fromJson(json : Object) : Object;
	}

	interface screenUtils {
		toMapGeometry(extent : esri.geometry.Extent,width : number,height : number,mapGeometry: esri.geometry.Geometry) : esri.geometry.Geometry;
		//toMapPoint(extent: esri.geometry.Extent,width : number,height : number,screenPoint : esri.geometry.ScreenPoint) : esri.geometry.Point; // Deprecated since 1.1, use toMapGeometry
		toScreenGeometry(extent: esri.geometry.Extent, width: number, height: number, screenGeometry : esri.geometry.Geometry) : esri.geometry.Geometry;
		toScreenPoint(extent: esri.geometry.Extent, width: number, height: number,mapPoint : esri.geometry.Point) : ScreenPoint;
	}

	interface mathUtils {
		getLength(point1: esri.geometry.Point, point2 : esri.geometry.Point) : number;
		getLineIntersection(line1start: esri.geometry.Point, line1end: esri.geometry.Point, line2start: esri.geometry.Point, line2end: esri.geometry.Point) : esri.geometry.Point;
	}

	interface geodesicUtils {

		geodesicAreas(polygons : esri.geometry.Geometry[], areaUnit : esri.Units) : number[];
		geodesicDensify(geometry : esri.geometry.Geometry, maxSegmentLength : number) : esri.geometry.Geometry;
		geodesicLengths(polylines : esri.geometry.Polyline[], lengthUnit : esri.Units) : number[];
	}
	
	interface normalizeUtils {
		normalizeCentralMeridian(geometries: esri.geometry.Geometry[], geometryService : esri.tasks.GeometryService, callback : Function,errback: Function) : dojo.Deferred<any>;
	}

	// TODO thoses 2 functions are associated in documentation to Polygon class, but have the same module as Polygon ??? is it a doc issue or the Polygon class must be augmented by there 2 functions ?

    export function isClockwise(ring : any) : boolean; // any for Ring
    export function polygonSelfIntersecting(polygon : esri.geometry.Polygon) : boolean;

    export class Extent extends Geometry {
        constructor(xmin: number, ymin: number, xmax: number, ymax: number, spatialReference : esri.SpatialReference);
        constructor(json : Object);
        spatialReference: SpatialReference;
        type: string;
        xmax: number;
        xmin: number;
        ymax: number;
        ymin: number;
        static centerAt(point : esri.geometry.Point): esri.geometry.Extent;
        contains(geometry: esri.geometry.Geometry): boolean;
        expand(factor : number): esri.geometry.Extent;
        getCenter(): esri.geometry.Point;
        getHeight(): number;
        getWidth(): number;
        intersects(geometry: esri.geometry.Geometry): boolean;
        intersects(extent: esri.geometry.Extent): esri.geometry.Extent;
        offset(dx: number, dy : number): esri.geometry.Extent;
        setSpatialReference(sr : esri.SpatialReference): esri.geometry.Geometry;
        toJson(): Object;
        union(extent : esri.geometry.Extent): esri.geometry.Extent;
        update(xmin: number, ymin: number, xmax: number, ymax: number, spatialReference : esri.SpatialReference): esri.geometry.Extent;
    }
    export class Geometry {
        spatialReference: SpatialReference;
        type: string;
        setSpatialReference(sr : esri.SpatialReference): esri.geometry.Geometry;
        toJson(): Object;
    }
    export class Multipoint extends Geometry {
        constructor(spatialReference: esri.SpatialReference);
        constructor(json: string);
        points: number[][];
        spatialReference: SpatialReference;
        type: string;
        addPoint(point : esri.geometry.Point): Multipoint;
        getExtent(): esri.geometry.Extent;
        getPoint(index : number): esri.geometry.Point;
        removePoint(index : number): esri.geometry.Point;
        setPoint(index : number, point : esri.geometry.Point): Multipoint;
        setSpatialReference(sr : esri.SpatialReference): esri.geometry.Geometry;
        toJson(): Object;
    }
    export class Point extends Geometry {
        constructor(x: number, y: number, spatialReference: esri.SpatialReference);
        constructor(xy: number[], spatialReference: esri.SpatialReference);
        constructor(json: Object);
        constructor(long: number, lat: number);
        constructor(pointXY : number[]);
        constructor(point: esri.geometry.Point);
        spatialReference: SpatialReference;
        type: string;
        x: number;
        y: number;
        getLatitude(): number;
        getLongitude(): number;
        offset(dx : number, dy : number): esri.geometry.Point;
        setLatitude(lat : number): esri.geometry.Point;
        setLongitude(lon : number): esri.geometry.Point;
        setSpatialReference(sr : esri.SpatialReference): esri.geometry.Geometry;
        setX(x : number): esri.geometry.Point;
        setY(y : number): esri.geometry.Point;
        toJson(): Object;
        update(x : number, y : number): esri.geometry.Point;
    }
    export class Polygon extends Geometry {
        constructor(spatialReference: esri.SpatialReference);
        constructor(json: Object);
        rings: number[][][];
        spatialReference: esri.SpatialReference;
        type: string;
        addRing(ringAsArrayOfLatLon : number[][]): esri.geometry.Polygon;
        addRing(ringAsArrayOfPoints : esri.geometry.Point[]): esri.geometry.Polygon;
        addRing(json : Object): esri.geometry.Polygon;
        contains(point : esri.geometry.Point): boolean;
        getExtent(): esri.geometry.Extent;
        getPoint(ringIndex : number, pointIndex : number): esri.geometry.Point;
        insertPoint(ringIndex : number, pointIndex : number, point : esri.geometry.Point): esri.geometry.Polygon;
        removePoint(ringIndex : number, pointIndex : number): esri.geometry.Point;
        removeRing(ringIndex : number): esri.geometry.Point[];
        setPoint(ringIndex: number, pointIndex: number, point : esri.geometry.Point): esri.geometry.Polygon;
        setSpatialReference(sr : esri.SpatialReference): esri.geometry.Geometry;
        toJson(): Object;
    }
    export class Polyline extends Geometry {
        constructor(spatialReference: esri.SpatialReference);
        constructor(json: Object);
        paths: number[][][];
        spatialReference: SpatialReference;
        type: string;
        addPath(pathAsArrayOfLatLon: number[][]): esri.geometry.Polyline;
        addPath(pathAsArrayOfPoints: esri.geometry.Point[]): esri.geometry.Polyline;
        addPath(json: Object): esri.geometry.Polygon;
        getExtent(): esri.geometry.Extent;
        getPoint(pathIndex : number, pointIndex : number): esri.geometry.Point;
        insertPoint(pathIndex: number, pointIndex: number, point : esri.geometry.Point): esri.geometry.Polyline;
        removePath(pathIndex: number): esri.geometry.Point[];
        removePoint(pathIndex: number, pointIndex: number): esri.geometry.Point;
        setPoint(pathIndex: number, pointIndex: number, point : esri.geometry.Point): esri.geometry.Polyline;
        setSpatialReference(sr : esri.SpatialReference): esri.geometry.Geometry;
        toJson(): Object;
    }
    export class ScreenPoint extends Point {
    }
}
declare module esri.layers {
    export class ArcGISDynamicMapServiceLayer extends DynamicMapServiceLayer {
        constructor(url : string, options? : Object);
        attributionDataUrl: string;
        capabilities: string;
        copyright: string;
        credential: Credential;
        description: string;
        disableClientCaching: boolean;
        dpi: number;
        dynamicLayerInfos: DynamicLayerInfo[];
        fullExtent: esri.geometry.Extent;
        hasAttributionData: boolean;
        id: string;
        imageFormat: string;
        imageTransparency: boolean;
        initialExtent: esri.geometry.Extent;
        layerDefinitions: string[];
        layerDrawingOptions: esri.layers.LayerDrawingOptions[];
        layerInfos: esri.layers.LayerInfo[];
        layerTimeOptions: esri.layers.LayerTimeOptions[];
        loaded: boolean;
        maxImageHeight: number;
        maxImageWidgth: number;
        maxRecordCount: number;
        maxScale: number;
        minScale: number;
        opacity: number;
        showAttribution: boolean;
        spatialReference: esri.SpatialReference;
        suspended: boolean;
        timeInfo: esri.layers.TimeInfo;
        units: string;
        url: string;
        useMapImage: boolean;
        version: number;
        visible: boolean;
        visibleAtMapScale: boolean;
        visibleLayers: number[];
        createDynamicLayerInfosFromLayerInfos(): DynamicLayerInfo[];
        exportMapImage(imageParameters: esri.layers.ImageParameters, callback : Function): void;
        getAttributionData(): dojo.Deferred<any>;
        getImageUrl(extent : esri.geometry.Extent, width : number, height : number, callback : Function): string;
        hide(): void;
        isVisibleAtScale(scale : number): boolean;
        refresh(): void;
        resume(): void;
        setDPI(dpi : number, doNotRefresh? : boolean): void;
        setDefaultLayerDefinitions(doNotRefresh?: boolean): void;
        setDefaultVisibleLayers(doNotRefresh?: boolean): void;
        setDisableClientCaching(disable: boolean): void;
        setDynamicLayerInfos(dynamicLayerInfos: esri.layers.DynamicLayerInfo[], doNotRefresh?: boolean): void;
        setGDBVersion(gdbVersion : string, doNotRefresh?: boolean): void;
        setImageFormat(imageFormat: string, doNotRefresh?: boolean): void;
        setImageTransparency(transparent: boolean, doNotRefresh?: boolean): void;
        setLayerDefinitions(layerDefinitions: string[], doNotRefresh?: boolean): void;
        setLayerDrawingOptions(layerDrawingOptions : esri.layers.LayerDrawingOptions[], doNotRefresh?: boolean): void;
        setLayerTimeOptions(options : esri.layers.LayerTimeOptions[], doNotRefresh?: boolean): void;
        setMaxScale(scale : number): void;
        setMinScale(scale : number): void;
        setOpacity(valueBetweenZeroAndOne: number): void;
        setScaleRange(minScale: number, maxScale: number): void;
        setUseMapTime(update : boolean): void;
        setVisibility(isVisible : boolean): void;
        setVisibleLayers(ids: number[], doNotRefresh?: boolean): void;
        show(): void;
        suspend(): void;
        onError(error: Error): void;
        onGDBVersionChange(): void;
        onLoad(layer : esri.layers.Layer): void;
        onMapImageExport(mapImage : esri.layers.MapImage): void;
        onOpacityChange(valueBetweenZeroAndOne: number): void;
        onResume(): void;
        onScaleRangeChange(): void;
        onScaleVisibilityChange(): void;
        onSuspend(): void;
        onUpdate(): void;
        onUpdateEnd(error : Error): void;
        onUpdateStart(): void;
        onVisibilityChange(visibility : boolean): void;
        //error : <Error> error;
        //gdb-version-change : void;
        //load : Layer;
        //map-image-export : MapImage;
        //opacity-change : <number> opacity;
        //resume : void;
        //scale-range-change : void;
        //scale-visibility-change : void;
        //suspend : void;
        //update-end : <Error> error;
        //update-start : void;
        //visibility-change : <boolean> visible;
    }
    export class ArcGISImageServiceLayer extends DynamicMapServiceLayer {
        constructor(url : string, options? : Object);
        attributionDataUrl: string;
        bandCount: number;
        bandIds: number[];
        bands: Object[];
        compressionQuality: number;
        copyrightText: string;
        credential: Credential;
        defaultMosaicRule: MosaicRule;
        description: string;
        disableClientCaching: boolean;
        format: string;
        fullExtent: esri.geometry.Extent;
        hasAttributionData: boolean;
        id: string;
        initialExtent: esri.geometry.Extent;
        interpolation: string;
        loaded: boolean;
        maxImageHeight: number;
        maxImageWidgth: number;
        maxRecordCount: number;
        maxScale: number;
        minScale: number;
        mosaicRule: MosaicRule;
        opacity: number;
        pixelSizeX: number;
        pixelSizeY: number;
        pixelType: number;
        renderingRule: RasterFunction;
        showAttribution: boolean;
        spatialReference: SpatialReference;
        suspended: boolean;
        timeInfo: TimeInfo;
        url: string;
        version: number;
        visible: boolean;
        visibleAtMapScale: boolean;
        exportMapImage(imageServiceParameters : esri.layers.ImageServiceParameters, callback : Function): void;
        getAttributionData(): dojo.Deferred<any>;
        getImageUrl(extent : esri.geometry.Extent, width : number, height : number, callback : Function): string;
        getKeyProperties(): dojo.Deferred<any>;
        hide(): void;
        isVisibleAtScale(scale : number): boolean;
        refresh(): void;
        resume(): void;
        setBandIds(bandIds : number[], doNotRefresh? : boolean): void;
        setCompressionQuality(quality : number, doNotRefresh? : boolean): void;
        setDisableClientCaching(disable : boolean): void;
        setImageFormat(imageFormat : string, doNotRefresh? : boolean): void;
        setInterpolation(interpolation : string, doNotRefresh?: boolean): void;
        setMaxScale(scale : number): void;
        setMinScale(scale : number): void;
        setMosaicRule(mosaicRule: MosaicRule, doNotRefresh?: boolean): MosaicRule;
        setOpacity(valueBetweenZeroAndOne : number): void;
        setRenderingRule(renderingRule : RasterFunction, doNotRefresh : boolean): RasterFunction;
        setScaleRange(minScale : number, maxScale : number): void;
        setUseMapTime(update : boolean): void;
        setVisibility(isVisible : boolean): void;
        show(): void;
        suspend(): void;
        OnRenderingChange(): void;
        onError(error : Error): void;
        onLoad(layer : esri.layers.Layer): void;
        onMapImageExport(mapImage : esri.layers.MapImage): void;
        onOpacityChange(opacity : number): void;
        onResume(): void;
        onScaleRangeChange(): void;
        onScaleVisibilityChange(): void;
        onSuspend(): void;
        onUpdate(): void;
        onUpdateEnd(error : Error): void;
        onUpdateStart(): void;
        onVisibilityChange(visibility : boolean): void;
        //error : <Error> error;
        //gdb-version-change : void;
        //load : Layer;
        //map-image-export : MapImage;
        //opacity-change : <number> opacity;
        //rendering-change : void;
        //resume : void;
        //scale-range-change : void;
        //scale-visibility-change : void;
        //suspend : void;
        //update-end : <Error> error;
        //update-start : void;
        //visibility-change : <boolean> visible;
    }

    export class ArcGISTiledMapServiceLayer extends TiledMapServiceLayer {
        constructor(url : string, options? : Object);
        attributionDataUrl: string;
        capabilities: string;
        copyright: string;
        credential: Credential;
        description: string;
        fullExtent: esri.geometry.Extent;
        hasAttributionData: boolean;
        id: string;
        initialExtent: esri.geometry.Extent;
        layerInfos: LayerInfo[];
        loaded: boolean;
        maxImageHeight: number;
        maxImageWidgth: number;
        maxRecordCount: number;
        maxScale: number;
        minScale: number;
        opacity: number;
        showAttribution: boolean;
        spatialReference: esri.SpatialReference;
        suspended: boolean;
        tileInfo: TileInfo;
        timeInfo: TimeInfo;
        units: string;
        url: string;
        version: number;
        visible: boolean;
        visibleAtMapScale: boolean;
        getAttributionData(): dojo.Deferred<any>;
        getTileUrl(level: number, row: number, column: number): string;
        hide(): void;
        isVisibleAtScale(scale: number): boolean;
        refresh(): void;
        resume(): void;
        setMaxScale(scale: number): void;
        setMinScale(scale: number): void;
        setOpacity(valueBetweenZeroAndOne : number): void;
        setScaleRange(minScale: number, maxScale: number): void;
        setVisibility(isVisible:boolean): void;
        show(): void;
        suspend(): void;
        onError(error: Error): void;
        onLoad(layer : esri.layers.Layer): void;
        onOpacityChange(opacity : number): void;
        onResume(): void;
        onScaleRangeChange(): void;
        onScaleVisibilityChange(): void;
        onSuspend(): void;
        onUpdate(): void;
        onUpdateEnd(error: Error): void;
        onUpdateStart(): void;
        onVisibilityChange(visibility : boolean): void;
        //error : <Error> error;
        load: Layer;
        //opacity-change : <number> opacity;
        //resume : void;
        //scale-range-change : void;
        //scale-visibility-change : void;
        //suspend : void;
        //update-end : <Error> error;
        //update-start : void;
        //visibility-change : <boolean> visible;
    }
    export class CodedValueDomain extends Domain {
        codedValues: Object[];
    }
    export class Domain {
        name: string;
        type: string;
        toJson(): Object;
    }
    export class DynamicLayerInfo extends LayerInfo {
        constructor(json? : Object);
        defaultVisibility: boolean;
        id: number;
        maxScale: number;
        minScale: number;
        name: string;
        parentLayerId: number;
        source: any; // LayerMapSource or LayerDataSource
        subLayerIds: number[];
        toJson(): Object;
    }
    export class DynamicMapServiceLayer extends Layer {
        // Note : DynamicMapServiceLayer has no constructor. Use ArcGISDynamicMapServiceLayer and ArcGISImageServiceLayer.htm instead. (As of v1.2)
        attributionDataUrl: string;
        credential: Credential;
        fullExtent: esri.geometry.Extent;
        hasAttributionData: boolean;
        id: string;
        initialExtent: esri.geometry.Extent;
        loaded: boolean;
        maxScale: number;
        minScale: number;
        opacity: number;
        showAttribution: boolean;
        spatialReference: SpatialReference;
        suspended: boolean;
        url: string;
        visible: boolean;
        visibleAtMapScale: boolean;
        getAttributionData(): dojo.Deferred<any>;
        getImageUrl(extent : esri.geometry.Extent, width : number, height : number, callback: Function): string;
        hide(): void;
        isVisibleAtScale(scale: number): boolean;
        refresh(): void;
        resume(): void;
        setMaxScale(scale: number): void;
        setMinScale(scale: number): void;
        setOpacity(valueBetweenZeroAndOne : number): void;
        setScaleRange(minScale: number, maxScale: number): void;
        setVisibility(isVisible: boolean): void;
        show(): void;
        suspend(): void;
        onError(error: Error): void;
        onLoad(layer : esri.layers.Layer): void;
        onOpacityChange(opacity: number): void;
        onResume(): void;
        onScaleRangeChange(): void;
        onScaleVisibilityChange(): void;
        onSuspend(): void;
        onUpdate(): void;
        onUpdateEnd(error: Error): void;
        onUpdateStart(): void;
        onVisibilityChange(visibility: boolean): void;
        //error : <Error> error;
        //gdb-version-change : void;
        load: Layer;
        //map-image-export : MapImage;
        //opacity-change : <number> opacity;
        //resume : void;
        //scale-range-change : void;
        //scale-visibility-change : void;
        //suspend : void;
        //update-end : <Error> error;
        //update-start : void;
        //visibility-change : <boolean> visible;
    }
    export class FeatureEditResult {
        attachmentId: number;
        error: Error;
        objectId: number;
        success: boolean;
    }
    export class FeatureLayer extends GraphicsLayer {
        constructor(url: string, options? : Object);
        constructor(featureCollectionObject: Object, options? : Object);
        SELECTION_SUBTRACT: string;
        MODE_SNAPSHOT: string;
        MODE_ONDEMAND: string;
        MODE_SELECTION: string;
        POPUP_NONE: string;
        POPUP_HTML_TEXT: string;
        POPUP_URL: string;
        SELECTION_ADD: string;
        SELECTION_NEW: string;
        allowGeometryUpdates: boolean;
        attributionDataUrl: string;
        capabilities: string;
        copyright: string;
        defaultDefinitionExpression: string;
        defaultVisibility: boolean;
        description: string;
        displayField: string;
        editFieldsInfo: Object;
        fields: Field[];
        fullExtent: esri.geometry.Extent;
        geometryType: string;
        globalIdField: string;
        graphics: Graphic[];
        hasAttachments: boolean;
        hasAttributionData: boolean;
        htmlPopupType: string;
        layerId: number;
        maxRecordCount: number;
        maxScale: number;
        minScale: number;
        name: string;
        objectIdField: string;
        ownershipBasedAccessControlForFeatures: Object;
        relationships: Object[];
        renderer: esri.renderer.Renderer;
        showAttribution: boolean;
        source: any; // <LayerMapSource or LayerDataSource> source
        supportsAdvancedQueries: boolean;
        supportsStatistics: boolean;
        suspended: boolean;
        templates: FeatureTemplate[];
        timeInfo: TimeInfo;
        type: string;
        typeIdField: string;
        types: FeatureType[];
        version: number;
        visibleAtMapScale: boolean;
        addAttachment(objectId : number, formNode : HTMLFormElement, callback?: Function, errback?: Function): dojo.Deferred<any>;
        applyEdits(adds: esri.Graphic[], updates: esri.Graphic[], deletes: esri.Graphic[], callback?: Function, errback?: Function): dojo.Deferred<any>;
        clearSelection(): FeatureLayer;
        deleteAttachments(objectId: number, attachmentIds: number[], callback?: Function, errback?: Function): dojo.Deferred<any>;
        getAttributionData(): dojo.Deferred<any>;
        getDefinitionExpression(): string;
        getEditCapabilities(options : Object): Object;
        getEditInfo(feature : esri.Graphic, options?: Object): any; //Object or Undefined;
        getEditSummary(feature : esri.Graphic, options?: Object): string;
        getMaxAllowableOffset(): number;
        getSelectedFeatures(): esri.Graphic[];
        getSelectionSymbol(): esri.symbol.Symbol;
        getTimeDefinition(): TimeExtent;
        isEditable(): boolean;
        isVisibleAtScale(scale: number): boolean;
        queryAttachmentInfos(objectId: number, callback?: Function, errback?: Function): dojo.Deferred<any>;
        queryCount(query: esri.tasks.Query, callback?: Function, errback?: Function): dojo.Deferred<any>;
        queryFeatures(query: esri.tasks.Query, callback?: Function, errback?: Function): dojo.Deferred<any>;
        queryIds(query: esri.tasks.Query, callback?: Function, errback?: Function): dojo.Deferred<any>;
        queryRelatedFeatures(relQuery: esri.tasks.RelationshipQuery, callback?: Function, errback?: Function): dojo.Deferred<any>;
        redraw(): void;
        refresh(): void;
        resume(): void;
        selectFeatures(query: esri.tasks.Query, selectionMethod? : number, callback?: Function, errback?: Function): dojo.Deferred<any>;
        setAutoGeneralize(enable: boolean): FeatureLayer;
        setDefinitionExpression(expression: string): FeatureLayer;
        setEditable(editable: boolean): FeatureLayer;
        setGDBVersion(versionName: string): FeatureLayer;
        setInfoTemplate(infoTemplate : esri.InfoTemplate): void;
        setMaxAllowableOffset(offset : number): void;
        setMaxScale(scale: number): void;
        setMinScale(scale: number): void;
        setOpacity(opacity: number): void;
        setRenderer(renderer : esri.renderer.Renderer): void;
        setScaleRange(minScale: number, maxScale: number): void;
        setSelectionSymbol(symbol : esri.symbol.Symbol): FeatureLayer;
        setTimeDefinition(definition: esri.TimeExtent): FeatureLayer;
        setTimeOffset(offsetValue : number, offsetUnits : string): FeatureLayer;
        setUseMapTime(update: boolean): void;
        suspend(): void;
        toJson(): Object;
        onAddAttachmentComplete(result: esri.layers.FeatureEditResult): void;
        onBeforeApplyEdits(adds: esri.Graphic[], updates: esri.Graphic[], deletes: esri.Graphic[]): void;
        onCapabilitiesChange(): void;
        onDblClick(event : Object): void;
        onDeleteAttachmentsComplete(results: esri.layers.FeatureEditResult[]): void;
        onEditsComplete(addResults: esri.layers.FeatureEditResult[], updateResults: esri.layers.FeatureEditResult[], deleteResults: esri.layers.FeatureEditResult[]): void;
        onQueryAttachmentInfosComplete(attachmentInfos : Object[]): void;
        onQueryCountComplete(count: number): void;
        onQueryFeaturesComplete(featureSet: esri.tasks.FeatureSet): void;
        onQueryIdsComplete(ids: number[]): void;
        onQueryLimitExceeded(): void;
        onQueryRelatedFeaturesComplete(relatedFeatures : Object): void;
        onResume(): void;
        onScaleRangeChange(): void;
        onScaleVisibilityChange(): void;
        onSelectionClear(): void;
        onSelectionComplete(features: esri.Graphic[], selectionMethod: number): void;
        onSuspend(): void;
        onUpdateEnd(error: Error, info?: Object): void;
        onUpdateStart(): void;
        //add-attachment-complete : FeatureEditResult;
        //before-apply-edits : Graphic[];
        //capabilities-change : void;
        //delete-attachments-complete : <Object[]> results;
        //edits-complete : FeatureEditResult[];
        //query-attachment-infos-complete : <Object[]> info;
        //query-count-complete : <number> count;
        //query-features-complete : FeatureSet;
        //query-ids-complete : <number[]> objectIds;
        //query-limit-exceeded : void;
        //query-related-features-complete : <Object> relatedFeatures;
        //scale-range-change : void;
        //scale-visibility-change : void;
        //selection-clear : void;
        //selection-complete : <;
        //update-end : <Error> error;
    }


    export class FeatureTemplate {
        TOOL_AUTO_COMPLETE_POLYGON: string;
        TOOL_CIRCLE: string;
        TOOL_ELLIPSE: string;
        TOOL_FREEHAND: string;
        TOOL_LINE: string;
        TOOL_NONE: string;
        TOOL_POINT: string;
        TOOL_POLYGON: string;
        TOOL_RECTANGLE: string;
        TOOL_ARROW: string;
        TOOL_TRIANGLE: string;
        description: string;
        drawingTool: string;
        name: string;
        prototype: Graphic;
        toJson(): Object;
    }
    export class FeatureType {
        domains: Object;
        id: number;
        name: string;
        templates: FeatureTemplate[];
        toJson(): Object;
    }
    export class Field {
        alias: string;
        domain: Domain;
        editable: boolean;
        length: number;
        name: string;
        nullable: boolean;
        type: string;
    }
    export class GeoRSSLayer {
        constructor(url : string, options? : Object);
        copyright: string;
        defaultVisibility: boolean;
        description: string;
        items: Graphic[];
        name: string;
        getFeatureLayers(): FeatureLayer[];
        onRefresh(): void;
    }
    export class GraphicsLayer extends Layer {
        constructor();
        constructor(options?: Object);
        attributionDataUrl: string;
        credential: Credential;
        graphics: Graphic[];
        hasAttributionData: boolean;
        id: string;
        loaded: boolean;
        maxScale: number;
        minScale: number;
        opacity: number;
        renderer: esri.renderer.Renderer;
        showAttribution: boolean;
        suspended: boolean;
        url: string;
        visible: boolean;
        visibleAtMapScale: boolean;
        add(graphic: esri.Graphic): Graphic;
        clear(): void;
        disableMouseEvents(): void;
        enableMouseEvents(): void;
        getAttributionData(): dojo.Deferred<any>;
        hide(): void;
        isVisibleAtScale(scale: number): boolean;
        redraw(): void;
        remove(graphic: esri.Graphic): Graphic;
        resume(): void;
        setInfoTemplate(infoTemplate : esri.InfoTemplate): void;
        setMaxScale(scale : number): void;
        setMinScale(scale: number): void;
        setOpacity(valueBetweenZeroAndOne : number): void;
        setRenderer(renderer : esri.renderer.Renderer): void;
        setScaleRange(minScale: number, maxScale: number): void;
        setVisibility(isVisible: boolean): void;
        show(): void;
        suspend(): void;
        onClick(event : Object): void;
        onDblClick(event : Object): void;
        onError(error: Error): void;
        onGraphicAdd(graphic: esri.Graphic): void;
        onGraphicRemove(graphic: esri.Graphic): void;
        onGraphicsClear(): void;
        onLoad(layer : esri.layers.Layer): void;
        onMouseDown(event : Object): void;
        onMouseDrag(event : Object): void;
        onMouseMove(event : Object): void;
        onMouseOut(event : Object): void;
        onMouseOver(event : Object): void;
        onMouseUp(event : Object): void;
        onOpacityChange(opacity): void;
        onResume(): void;
        onScaleRangeChange(): void;
        onScaleVisibilityChange(): void;
        onSuspend(): void;
        onUpdate(): void;
        onUpdateEnd(error : Error): void;
        onUpdateStart(): void;
        onVisibilityChange(visibility: boolean): void;
        click: void;
        //dbl-click : void;
        //error : <Error> error;
        //graphic-add : Graphic;
        //graphic-remove : Graphic;
        //graphics-clear : void;
        // load : Layer;
        //mouse-down : <MouseEvent> <MouseEvent>;
        //mouse-drag : <MouseEvent> <MouseEvent>;
        //mouse-move : <MouseEvent> <MouseEvent>;
        //mouse-out : <MouseEvent> <MouseEvent>;
        //mouse-over : <MouseEvent> <MouseEvent>;
        //mouse-up : <MouseEvent> <MouseEvent>;
        //opacity-change : <number> opacity;
        // resume : void;
        //scale-range-change : void;
        //scale-visibility-change : void;
        //suspend : void;
        //update-end : <Error> error;
        //update-start : void;
        //visibility-change : <boolean> visible;
    }
    export class ImageParameters {
        constructor();
        LAYER_OPTION_SHOW: string;
        LAYER_OPTION_HIDE: string;
        LAYER_OPTION_INCLUDE: string;
        LAYER_OPTION_EXCLUDE: string;
        bbox: esri.geometry.Extent;
        dpi: void;
        format: string;
        height: number;
        imageSpatialReference: SpatialReference;
        layerDefinitions: string[];
        layerIds: void;
        layerOption: string;
        layerTimeOptions: LayerTimeOptions[];
        timeExtent: TimeExtent;
        transparent: boolean;
        width: number;
    }
    export class ImageServiceParameters {
        constructor();
        INTERPOLATION_BILINEAR: string;
        INTERPOLATION_CUBICCONVOLUTION: string;
        INTERPOLATION_MAJORITY: string;
        INTERPOLATION_NEARESTNEIGHBOR: string;
        bandIds: number[];
        compressionQuality: number;
        extent: esri.geometry.Extent;
        format: string;
        height: number;
        interpolation: string;
        mosaicRule: MosaicRule;
        noData: number;
        renderingRule: RasterFunction;
        timeExtent: TimeExtent;
        width: number;
    }
    export class InheritedDomain extends Domain {
    }
    export class JoinDataSource extends DataSource {
        constructor(json? : Object);
        joinType: string;
        leftTableKey: string;
        leftTableSource: DataSource; // LayerMapSource or LayerDataSource
        rightTableKey: string;
        rightTableSource: DataSource; // LayerMapSource or LayerDataSource
        toJson(): Object;
    }
    export class KMLFolder {
        description: string;
        featureInfos: Object[];
        id: number;
        name: string;
        parentFolderId: number;
        snippet: string;
        subFolderIds: number[];
        visibility: number;
    }
    export class KMLGroundOverlay {
        Snippet: string;
        description: string;
        extent: esri.geometry.Extent;
        height: number;
        href: string;
        id: number;
        name: string;
        scale: number;
        visibility: number;
        width: number;
    }
    export class KMLLayer extends Layer {
        constructor(id: string, url: string, options?: Object);
        attributionDataUrl: string;
        credential: Credential;
        featureInfos: Object[];
        folders: KMLFolder[];
        hasAttributionData: boolean;
        id: string;
        linkInfo: Object;
        loaded: boolean;
        maxScale: number;
        minScale: number;
        opacity: number;
        showAttribution: boolean;
        suspended: boolean;
        url: string;
        visible: boolean;
        visibleAtMapScale: boolean;
        getAttributionData(): dojo.Deferred<any>;
        getFeature(featureInfo): Object;
        getLayers(): Layer[];
        hide(): void;
        isVisibleAtScale(scale : number): boolean;
        resume(): void;
        setFolderVisibility(folder: esri.layers.KMLFolder, visibility: boolean): void;
        setMaxScale(scale: number): void;
        setMinScale(scale: number): void;
        setOpacity(valueBetweenZeroAndOne: number): void;
        setScaleRange(minScale: number, maxScale: number): void;
        setVisibility(isVisible: boolean): void;
        show(): void;
        suspend(): void;
        onError(error: Error): void;
        onLoad(layer : esri.layers.Layer): void;
        onOpacityChange(opacity: number): void;
        onRefresh(): void;
        onResume(): void;
        onScaleRangeChange(): void;
        onScaleVisibilityChange(): void;
        onSuspend(): void;
        onUpdate(): void;
        onUpdateEnd(error: Error): void;
        onUpdateStart(): void;
        onVisibilityChange(visibility: boolean): void;
        //error : <Error> error;
        //load : Layer;
        //opacity-change : <number> opacity;
        //resume : void;
        //scale-range-change : void;
        //scale-visibility-change : void;
        //suspend : void;
        //update-end : <Error> error;
        //update-start : void;
        //visibility-change : <boolean> visible;
    }
    export class LOD {
        level: number;
        levelValue: string;
        resolution: number;
        scale: number;
    }
    export class Layer {
        constructor(options?: Object);
        attributionDataUrl: string;
        credential: Credential;
        hasAttributionData: boolean;
        id: string;
        loaded: boolean;
        maxScale: number;
        minScale: number;
        opacity: number;
        showAttribution: boolean;
        suspended: boolean;
        url: string;
        visible: boolean;
        visibleAtMapScale: boolean;
        getAttributionData(): dojo.Deferred<any>;
        hide(): void;
        isVisibleAtScale(scale: number): boolean;
        resume(): void;
        setMaxScale(scale: number): void;
        setMinScale(scale: number): void;
        setOpacity(valueBetweenZeroAndOne : number): void;
        setScaleRange(minScale: number, maxScale: number): void;
        setVisibility(isVisible : boolean): void;
        show(): void;
        suspend(): void;
        onError(error): void;
        onLoad(layer : esri.layers.Layer): void;
        onOpacityChange(opacity: number): void;
        onResume(): void;
        onScaleRangeChange(): void;
        onScaleVisibilityChange(): void;
        onSuspend(): void;
        onUpdate(): void;
        onUpdateEnd(error: Error): void;
        onUpdateStart(): void;
        onVisibilityChange(visibility: boolean): void;
        //error : <Error> error;
        //load : Layer;
        //opacity-change : <number> opacity;
        //resume : void;
        //scale-range-change : void;
        //scale-visibility-change : void;
        //suspend : void;
        //update-end : <Error> error;
        //update-start : void;
        //visibility-change : <boolean> visible;
    }


	export class DataSource { // abstract class used for specify the datasources
		constructor(json?);
	}


    export class LayerDataSource extends DataSource {
        constructor(json?);
        dataSource: Object;
        toJson(): Object;
    }
    export class LayerDrawingOptions {
        constructor(json?);
        renderer: esri.renderer.Renderer;
        scaleSymbols: boolean;
        showLabels: boolean;
        transparency: number;
        toJson(): Object;
    }
    export class LayerInfo {
        defaultVisibility: boolean;
        id: number;
        maxScale: number;
        minScale: number;
        name: string;
        parentLayerId: number;
        subLayerIds: number[];
    }
    export class LayerMapSource {
        constructor(json?);
        gdbVersion: string;
        mapLayerId: number;
        toJson(): Object;
    }
    export class LayerTimeOptions {
        timeDataCumulative: boolean;
        timeOffset: void;
        timeOffsetUnits: void;
        useTime: boolean;
    }
    export class MapImage {
        constructor(options : Object);
        extent: esri.geometry.Extent;
        height: number;
        href: string;
        scale: number;
        width: number;
    }
    export class MapImageLayer extends Layer {
        constructor(options?: Object);
        attributionDataUrl: string;
        credential: Credential;
        hasAttributionData: boolean;
        id: string;
        loaded: boolean;
        maxScale: number;
        minScale: number;
        opacity: number;
        showAttribution: boolean;
        suspended: boolean;
        url: string;
        visible: boolean;
        visibleAtMapScale: boolean;
        addImage(mapImage): void;
        getAttributionData(): dojo.Deferred<any>;
        getImages(): MapImage[];
        hide(): void;
        isVisibleAtScale(scale): boolean;
        removeAllImages(): void;
        removeImage(mapImage: esri.layers.MapImage): void;
        resume(): void;
        setMaxScale(scale: number): void;
        setMinScale(scale: number): void;
        setOpacity(): void;
        setScaleRange(minScale: number, maxScale: number): void;
        setVisibility(isVisible: boolean): void;
        show(): void;
        suspend(): void;
        onError(error): void;
        onLoad(layer : esri.layers.Layer): void;
        onOpacityChange(valueBetweenZeroAndOne: number): void;
        onResume(): void;
        onScaleRangeChange(): void;
        onScaleVisibilityChange(): void;
        onSuspend(): void;
        onUpdate(): void;
        onUpdateEnd(error): void;
        onUpdateStart(): void;
        onVisibilityChange(visibility: boolean): void;
        //error : <Error> error;
        //load : Layer;
        //opacity-change : <number> opacity;
        //resume : void;
        //scale-range-change : void;
        //scale-visibility-change : void;
        //suspend : void;
        //update-end : <Error> error;
        //update-start : void;
        //visibility-change : <boolean> visible;
    }
    export class MosaicRule {
        constructor();
        METHOD_NONE: string;
        METHOD_CENTER: string;
        METHOD_NADIR: string;
        METHOD_VIEWPOINT: string;
        METHOD_ATTRIBUTE: string;
        METHOD_LOCKRASTER: string;
        METHOD_NORTHWEST: string;
        METHOD_SEAMLINE: string;
        OPERATION_FIRST: string;
        OPERATION_LAST: string;
        OPERATION_MIN: string;
        OPERATION_MAX: string;
        OPERATION_MEAN: string;
        OPERATION_BLEND: string;
        ascending: boolean;
        lockRasterIds: number[];
        method: string;
        objectIds: number[];
        operation: string;
        sortField: string;
        sortValue: string;
        viewpoint: esri.geometry.Point;
        where: string;
        toJson(): Object;
    }
    export class OpenStreetMapLayer {
        constructor(options: Object);
        copyright: string;
    }
    export class QueryDataSource extends DataSource {
        constructor(json?: Object);
        geometryType: string;
        oidFields: string[];
        query: string;
        spatialReference: SpatialReference;
        workspaceId: string;
        toJson(): Object;
    }
    export class RangeDomain {
        maxValue: number;
        minValue: number;
    }
    export class RasterDataSource extends DataSource {
        constructor(json?: Object);
        dataSourceName: string;
        workspaceId: string;
        toJson(): Object;
    }
    export class RasterFunction {
        constructor();
        arguments: Object;
        functionName: string;
        variableName: string;
        toJson(): Object;
    }
    export class TableDataSource extends DataSource {
        constructor(json?: Object);
        dataSourceName: string;
        gdbVersion: string;
        workspaceId: string;
        toJson(): Object;
    }
    export class TileInfo {
        constructor(properties: Object);
        dpi: number;
        format: string;
        height: number;
        lods: LOD[];
        origin: esri.geometry.Point;
        spatialReference: SpatialReference;
        width: number;
        toJson(): Object;
    }
    export class TiledMapServiceLayer extends Layer {
        attributionDataUrl: string;
        credential: Credential;
        fullExtent: esri.geometry.Extent;
        hasAttributionData: boolean;
        id: string;
        initialExtent: esri.geometry.Extent;
        loaded: boolean;
        maxScale: number;
        minScale: number;
        opacity: number;
        showAttribution: boolean;
        spatialReference: SpatialReference;
        suspended: boolean;
        tileInfo: TileInfo;
        url: string;
        visible: boolean;
        visibleAtMapScale: boolean;
        getAttributionData(): dojo.Deferred<any>;
        getTileUrl(level: number, row: number, column: number): string;
        hide(): void;
        isVisibleAtScale(scale: number): boolean;
        refresh(): void;
        resume(): void;
        setMaxScale(scale: number): void;
        setMinScale(scale: number): void;
        setOpacity(valueBetweenZeroAndOne : number): void;
        setScaleRange(minScale: number, maxScale: number): void;
        setVisibility(isVisible: boolean): void;
        show(): void;
        suspend(): void;
        onError(error): void;
        onLoad(layer : esri.layers.Layer): void;
        onOpacityChange(opacity: number): void;
        onResume(): void;
        onScaleRangeChange(): void;
        onScaleVisibilityChange(): void;
        onSuspend(): void;
        onUpdate(): void;
        onUpdateEnd(error): void;
        onUpdateStart(): void;
        onVisibilityChange(visibility: boolean): void;
        //error : <Error> error;
        //load : Layer;
        //opacity-change : <number> opacity;
        //resume : void;
        //scale-range-change : void;
        //scale-visibility-change : void;
        //suspend : void;
        //update-end : <Error> error;
        //update-start : void;
        //visibility-change : <boolean> visible;
    }
    export class TimeInfo {
        esriTimeUnitsCenturies: string;
        esriTimeUnitsDays: string;
        esriTimeUnitsDecades: string;
        esriTimeUnitsHours: string;
        esriTimeUnitsMilliseconds: string;
        esriTimeUnitsMinutes: string;
        esriTimeUnitsMonths: string;
        esriTimeUnitsSeconds: string;
        esriTimeUnitsUnknown: string;
        esriTimeUnitsWeeks: string;
        esriTimeUnitsYears: string;
        endTimeField: string;
        exportOptions: LayerTimeOptions;
        startTimeField: string;
        timeExtent: TimeExtent;
        timeInterval: number;
        timeIntervalUnits: string;
        timeReference: TimeReference;
        trackIdField: string;
    }
    export class TimeReference {
        respectsDaylightSaving: boolean;
        timeZone: string;
    }
    export class WMSLayer {
        constructor(url: string, options? : Object);
        copyright: string;
        description: string;
        extent: esri.geometry.Extent;
        getMapUrl: string;
        imageFormat: string;
        layerInfos: WMSLayerInfo[];
        maxHeight: number;
        maxWidth: number;
        spatialReference: SpatialReference;
        title: string;
        version: string;
        setImageFormat(format: string): void;
        setImageTransparency(backgroundTransparency: boolean): void;
        setVisibleLayers(layers: string[]): void;
    }
    export class WMSLayerInfo {
        constructor(layer : esri.layers.Layer);
        description: string;
        extent: esri.geometry.Extent;
        name: string;
        title: string;
    }
    export class WMTSLayer {
        constructor(url, options?);
        copyright: string;
        description: string;
        format: string;
        fullExtent: esri.geometry.Extent;
        initialExtent: esri.geometry.Extent;
        layerInfos: Object[];
        serviceMode: string;
        spatialReference: SpatialReference;
        tileInfo: Object;
        title: string;
        version: string;
        setActiveLayer(WMTSLayerInfo): void;
    }
    export class WMTSLayerInfo {
        constructor(options : Object);
    }
    export class WebTiledLayer {
        constructor(urlTemplate: string, options?: Object);
        copyright: string;
        fullExtent: esri.geometry.Extent;
        initialExtent: esri.geometry.Extent;
        spatialReference: SpatialReference;
        tileInfo: TileInfo;
        tileServers: string[];
    }
}


declare module esri.renderer {

	interface jsonUtils {
		fromJson(json: Object): Renderer; // return the renderer
	}


    export class ClassBreaksRenderer extends Renderer {
        constructor(defaultSymbol: Object, attributeField: string);
        constructor(json : Object);
        attributeField: void;
        breaks: string;
        classificationMethod: string;
        defaultSymbol: esri.symbol.Symbol;
        infos: Object[];
        normalizationField: string;
        normalizationTotal: number;
        normalizationType: string;
        addBreak(minValueOrInfo: number, maxValue: number, symbol: esri.symbol.Symbol): void;
        clearBreaks(): void;
        getSymbol(graphic: esri.Graphic): esri.symbol.Symbol;
        removeBreak(minValue: number, maxValue: number): void;
        setMaxInclusive(enable: boolean): void;
        toJson(): Object;
    }
    export class Renderer {
        defaultSymbol: esri.symbol.Symbol;
        getSymbol(graphic: esri.Graphic): esri.symbol.Symbol;
        toJson(): Object;
    }
    export class SimpleRenderer extends Renderer {
        constructor(defaultSymbol: esri.symbol.Symbol);
        constructor(json: Object);
        defaultSymbol: esri.symbol.Symbol;
        description: string;
        label: string;
        symbol: esri.symbol.Symbol;
        getSymbol(graphic: esri.Graphic): esri.symbol.Symbol;
        toJson(): Object;
    }
    export class SymbolAger {
        getAgedSymbol(symbol: esri.symbol.Symbol, graphic: esri.Graphic): esri.symbol.Symbol;
    }
    export class TemporalRenderer {
        constructor(observationRenderer: esri.renderer.Renderer, latestObservationRenderer?: esri.renderer.Renderer,
            trackRenderer?: esri.renderer.Renderer, observationAger?: esri.renderer.SymbolAger);
        getSymbol(graphic: esri.Graphic): esri.symbol.Symbol;
    }
    export class TimeClassBreaksAger extends SymbolAger {
        constructor(infos: Object[]);
        UNIT_DAYS: string;
        UNIT_HOURS: string;
        UNIT_MILLISECONDS: string;
        UNIT_MINUTES: string;
        UNIT_MONTHS: string;
        UNIT_SECONDS: string;
        UNIT_WEEKS: string;
        UNIT_YEARS: string;
        getAgedSymbol(symbol: esri.symbol.Symbol, graphic: esri.Graphic): esri.symbol.Symbol;
    }
    export class TimeRampAger extends SymbolAger {
        constructor(colorRange?: Dojo.Color, sizeRange?: number[], alphaRange?: number[]);
        getAgedSymbol(symbol: esri.symbol.Symbol, graphic: esri.Graphic): esri.symbol.Symbol;
    }
    export class UniqueValueRenderer extends Renderer { 
        constructor(defaultSymbol: esri.symbol.Symbol, attributeField: string,
            attributeField2?: string, attributeField3?: string, fieldDelimeter?: string);
        constructor(json : Object);
        attributeField: string;
        attributeField2: string;
        attributeField3: string;
        defaultLabel: string;
        defaultSymbol: esri.symbol.Symbol;
        fieldDelimiter: string;
        infos: Object[];
        values: string[];
        addValue(valueOrInfo: string, symbol: esri.symbol.Symbol): void;
        addValue(valueAndSymbolAndLabelAndDescription: Object): void;
        getSymbol(graphic: esri.Graphic): esri.symbol.Symbol;
        removeValue(value: string): void;
        toJson(): Object;
    }
}

declare module esri.symbol {

	interface jsonUtils {
		fromJson(json : Object): esri.symbol.Symbol;
		getShapeDescriptors(): Object;
	}

    export class CartographicLineSymbol extends SimpleLineSymbol{
        constructor();
        constructor(style?: string, color?: Dojo.Color, width?: number, cap?: string, join?: string, miterLimit?: string);
        constructor(json : Object);
        CAP_BUTT: string;
        CAP_ROUND: string;
        CAP_SQUARE: string;
        JOIN_MITER: string;
        JOIN_ROUND: string;
        JOIN_BEVEL: string;
        STYLE_SHORTDASH: string;
        STYLE_SHORTDOT: string;
        STYLE_SHORTDASHDOT: string;
        STYLE_SHORTDASHDOTDOT: string;
        STYLE_LONGDASH: string;
        STYLE_LONGDASHDOT: string;
        cap: string;
        color: Dojo.Color;
        join: string;
        miterLimit: string;
        style: string;
        type: string;
        width: number;
        setCap(cap: string): CartographicLineSymbol;
        setColor(color: Dojo.Color): esri.symbol.Symbol;
        setJoin(join: string): CartographicLineSymbol;
        setMiterLimit(miterLimit: string): CartographicLineSymbol;
        setStyle(style: string): esri.symbol.SimpleLineSymbol;
        setWidth(width: number): LineSymbol;
        toJson(): Object;
    }
    export class FillSymbol extends Symbol {
        color: Dojo.Color;
        outline: esri.symbol.SimpleLineSymbol;
        type: string;
        setColor(color): esri.symbol.Symbol;
        setOutline(outline): FillSymbol;
        toJson(): Object;
    }
    export class Font {
        constructor();
        constructor(size: number, style: string, variant: string, weight: string, family: string);
        constructor(json : Object);
        STYLE_NORMAL: string;
        STYLE_ITALIC: string;
        STYLE_OBLIQUE: string;
        VARIANT_NORMAL: string;
        VARIANT_SMALLCAPS: string;
        WEIGHT_NORMAL: string;
        WEIGHT_BOLD: string;
        WEIGHT_BOLDER: string;
        WEIGHT_LIGHTER: string;
        family: string;
        size: string;
        style: string;
        variant: string;
        weight: string;
        setFamily(): Font;
        setSize(): Font;
        setStyle(): Font;
        setVariant(): Font;
        setWeight(): Font;
    }
    export class LineSymbol extends Symbol {
        color: Dojo.Color;
        type: string;
        width: number;
        setColor(color: Dojo.Color): esri.symbol.Symbol;
        setWidth(width: number): LineSymbol;
        toJson(): Object;
    }
    export class MarkerSymbol extends Symbol {
        angle: number;
        color: Dojo.Color;
        size: number;
        type: string;
        xoffset: number;
        yoffset: number;
        setAngle(angle: number): MarkerSymbol;
        setColor(color: Dojo.Color): esri.symbol.Symbol;
        setOffset(x: number, y: number): MarkerSymbol;
        setSize(size: number): MarkerSymbol;
        toJson(): Object;
    }
    export class PictureFillSymbol extends FillSymbol {
        constructor(url: string, outline : esri.symbol.SimpleLineSymbol, width : number, height : number);
        constructor(json : Object);
        color: Dojo.Color;
        height: number;
        outline: esri.symbol.SimpleLineSymbol;
        type: string;
        url: string;
        width: number;
        xoffset: number;
        xscale: number;
        yoffset: number;
        yscale: number;
        setColor(color: Dojo.Color): esri.symbol.Symbol;
        setHeight(height: number): PictureFillSymbol;
        setOffset(x: number, y: number): PictureFillSymbol;
        setOutline(outline: esri.symbol.SimpleLineSymbol): FillSymbol;
        setUrl(url : string): PictureFillSymbol;
        setWidth(width: number): PictureFillSymbol;
        setXScale(scale: number): PictureFillSymbol;
        setYScale(scale: number): PictureFillSymbol;
        toJson(): Object;
    }
    export class PictureMarkerSymbol extends MarkerSymbol {
        constructor(url: string, width : number, height : number);
        constructor(json : Object);
        angle: number;
        color: Dojo.Color;
        height: number;
        size: number;
        type: string;
        url: string;
        width: number;
        xoffset: number;
        yoffset: number;
        setAngle(angle: number): MarkerSymbol;
        setColor(color: Dojo.Color): esri.symbol.Symbol;
        setHeight(height: number): PictureMarkerSymbol;
        setOffset(x: number, y: number): MarkerSymbol;
        setSize(size: number): MarkerSymbol;
        setUrl(url : string): PictureMarkerSymbol;
        setWidth(width: number): PictureMarkerSymbol;
        toJson(): Object;
    }
    export class SimpleFillSymbol extends FillSymbol {
        constructor();
        constructor(style: string, outline: esri.symbol.SimpleLineSymbol, color: Dojo.Color);
        constructor(json : Object);
        STYLE_SOLID: string;
        STYLE_NULL: string;
        STYLE_HORIZONTAL: string;
        STYLE_VERTICAL: string;
        STYLE_FORWARD_DIAGONAL: string;
        STYLE_BACKWARD_DIAGONAL: string;
        STYLE_CROSS: string;
        STYLE_DIAGONAL_CROSS: string;
        color: Dojo.Color;
        outline: esri.symbol.SimpleLineSymbol;
        style: string;
        type: string;
        setColor(color: Dojo.Color): esri.symbol.Symbol;
        setOutline(outline : esri.symbol.SimpleLineSymbol): FillSymbol;
        setStyle(style: string): SimpleFillSymbol;
        toJson(): Object;
    }
    export class SimpleLineSymbol extends LineSymbol {
        constructor();
        constructor(style: string, color: Dojo.Color, width: number);
        constructor(json : Object);
        STYLE_SOLID: string;
        STYLE_DASH: string;
        STYLE_DOT: string;
        STYLE_DASHDOTDOT: string;
        STYLE_NULL: string;
        STYLE_DASHDOT: string;
        STYLE_SHORTDASH: string;
        STYLE_SHORTDOT: string;
        STYLE_SHORTDASHDOTDOT: string;
        STYLE_SHORTDASHDOT: string;
        STYLE_LONGDASH: string;
        STYLE_LONGDASHDOT: string;
        color: Dojo.Color;
        style: string;
        type: string;
        width: number;
        setColor(color: Dojo.Color): esri.symbol.Symbol;
        setStyle(style: string): esri.symbol.SimpleLineSymbol;
        setWidth(width: number): LineSymbol;
        toJson(): Object;
    }
    export class SimpleMarkerSymbol extends MarkerSymbol {
        constructor();
        constructor(style: string, size: number, outline: esri.symbol.SimpleLineSymbol, color: Dojo.Color);
        constructor(json : Object);
        STYLE_CIRCLE: string;
        STYLE_SQUARE: string;
        STYLE_CROSS: string;
        STYLE_X: string;
        STYLE_DIAMOND: string;
        STYLE_PATH: string;
        angle: number;
        color: Dojo.Color;
        outline: esri.symbol.SimpleLineSymbol;
        size: number;
        style: string;
        type: string;
        xoffset: number;
        yoffset: number;
        setAngle(angle: number): MarkerSymbol;
        setColor(color: Dojo.Color): esri.symbol.Symbol;
        setOffset(x: number, y: number): MarkerSymbol;
        setOutline(outline: esri.symbol.SimpleLineSymbol): esri.symbol.SimpleMarkerSymbol;
        setPath(path: string): esri.symbol.SimpleMarkerSymbol;
        setSize(size: number): MarkerSymbol;
        setStyle(style: string): esri.symbol.SimpleMarkerSymbol;
        toJson(): Object;
    }
    export class Symbol {
        color: Dojo.Color;
        type: string;
        setColor(color: Dojo.Color): esri.symbol.Symbol;
        toJson(): Object;
    }
    export class TextSymbol extends Symbol {
        constructor(text: string);
        constructor(text: string, font: esri.symbol.Font, color: Dojo.Color);
        constructor(json: Object);
        ALIGN_START: string;
        ALIGN_MIDDLE: string;
        ALIGN_END: string;
        DECORATION_NONE: string;
        DECORATION_UNDERLINE: string;
        DECORATION_OVERLINE: string;
        DECORATION_LINETHROUGH: string;
        align: string;
        angle: number;
        color: Dojo.Color;
        decoration: string;
        font: Font;
        kerning: boolean;
        rotated: boolean;
        text: string;
        type: string;
        xoffset: number;
        yoffset: number;
        setAlign(align: string): TextSymbol;
        setAngle(angle: number): TextSymbol;
        setColor(color: Dojo.Color): esri.symbol.Symbol;
        setDecoration(decoration: string): TextSymbol;
        setFont(font: esri.symbol.Font): TextSymbol;
        setKerning(kerning: boolean): TextSymbol;
        setOffset(x: number, y: number): TextSymbol;
        setRotated(rotated: boolean): TextSymbol;
        setText(text: string): TextSymbol;
        toJson(): Object;
    }
}

declare module esri.tasks {
    export class AddressCandidate {
        address: Object;
        attributes: void;
        location: esri.geometry.Point;
        score: number;
    }
    export class AlgorithmicColorRamp extends ColorRamp {
        constructor();
        algorithim: string;
        fromColor: Dojo.Color;
        toColor: Dojo.Color;
        toJson(): Object;
    }
    export class AreasAndLengthsParameters {
        constructor();
        areaUnit: string; // esri.tasks.GeometryService;
        calculationType: string;
        lengthUnit: string; // esri.tasks.GeometryService;
        polygons: esri.geometry.Geometry[];
    }
    export class BufferParameters {
        constructor();
        bufferSpatialReference: SpatialReference;
        distances: number[];
        geodesic: boolean;
        geometries: esri.geometry.Geometry[];
        outSpatialReference: esri.SpatialReference;
        unionResults: boolean;
        unit: string;
    }
    export class ClassBreaksDefinition {
        constructor();
        baseSymbol: esri.symbol.Symbol;
        breakCount: number;
        classificationField: string;
        classificationMethod: string;
        colorRamp: any; //AlgorithmicColorRamp || MultipartColorRamp;
        normalizationField: string;
        normalizationType: string;
        standardDeviationInterval: number;
        toJson(): Object;
    }
    export class ClassificationDefinition {
        baseSymbol: esri.symbol.Symbol;
        colorRamp: any; //AlgorithmicColorRamp || MultipartColorRamp;
        type: string;
    }
    export class ClosestFacilityParameters {
        constructor();
        accumulateAttributes: string[];
        attributeParameterValues: Object[];
        defaultCutoff: number;
        defaultTargetFacilityCount: number;
        directionsLanguage: string;
        directionsLengthUnits: string;
        directionsOutputType: string;
        directionsStyleName: string;
        directionsTimeAttribute: string;
        doNotLocateOnRestrictedElements: boolean;
        facilities: Object;
        impedenceAttribute: string;
        incidents: Object;
        outSpatialReference: SpatialReference;
        outputGeometryPrecision: number;
        outputGeometryPrecisionUnits: string;
        outputLines: string;
        pointBarriers: Object;
        polygonBarriers: Object;
        polylineBarriers: Object;
        restrictUTurns: string;
        restrictionAttributes: string[];
        returnDirections: boolean;
        returnFacilities: boolean;
        returnIncidents: boolean;
        returnPointBarriers: boolean;
        returnPolygonBarriers: boolean;
        returnPolylineBarriers: boolean;
        returnRoutes: boolean;
        timeOfDay: esri.tasks.Date;
        timeOfDayUsage: string;
        travelDirection: string;
        useHierarchy: boolean;
    }
    export class ClosestFacilitySolveResult {
        directions: esri.tasks.DirectionsFeatureSet;
        facilities: esri.geometry.Point[];
        incidents: esri.geometry.Point[];
        messages: esri.tasks.NAMessage;
        pointBarriers: esri.geometry.Point[];
        polygonBarriers: esri.geometry.Polygon[];
        polylineBarriers: esri.geometry.Polyline[];
        routes: Graphic[];
    }
    export class ClosestFacilityTask {
        constructor(url?: string);
        solve(params: esri.tasks.ClosestFacilityParameters, callback?: Function, errback?: Function): dojo.Deferred<any>;
        onSolveComplete(closestFacilitySolveResult: esri.tasks.ClosestFacilitySolveResult): void;
        // solve-complete : <ClosestFacilityResult> result;
    }
    export class DataFile {
        constructor();
        itemID: string;
        url: string;
    }
    export class DataLayer {
        constructor();
        SPATIAL_REL_INTERSECTS: string;
        SPATIAL_REL_CONTAINS: string;
        SPATIAL_REL_CROSSES: string;
        SPATIAL_REL_ENVELOPEINTERSECTS: string;
        SPATIAL_REL_INDEXINTERSECTS: string;
        SPATIAL_REL_OVERLAPS: string;
        SPATIAL_REL_TOUCHES: string;
        SPATIAL_REL_WITHIN: string;
        geometry: esri.geometry.Geometry;
        name: string;
        spatialRelationship: string;
        where: string;
    }
    export class Date {
        constructor();
        date: esri.tasks.Date;
        format: string;
    }
    export class DirectionsFeatureSet extends FeatureSet {
        displayFieldName: string;
        exceededTransferLimit: number;
        extent: esri.geometry.Extent;
        features: Graphic[];
        fieldAliases: Object;
        geometryType: string;
        mergedGeometry: esri.geometry.Polyline;
        routeId: string;
        routeName: string;
        spatialReference: SpatialReference;
        strings: Object[];
        totalDriveTime: number;
        totalLength: number;
        totalTime: number;
    }
    export class DistanceParameters {
        constructor();
        distanceUnit: string; // esri.tasks.GeometryService Constant.
        geodesic: boolean;
        geometry1: esri.geometry.Geometry;
        geometry2: esri.geometry.Geometry;
    }
    export class FeatureSet {
        constructor();
        constructor(json : Object);
        displayFieldName: string;
        exceededTransferLimit: number;
        features: Graphic[];
        fieldAliases: Object;
        geometryType: string;
        spatialReference: SpatialReference;
    }
    export class FindParameters {
        constructor();
        contains: boolean;
        dynamicLayerInfos: esri.layers.DynamicLayerInfo[];
        layerDefinitions: string[];
        layerIds: number[];
        maxAllowableOffset: number;
        outSpatialReference: SpatialReference;
        returnGeometry: boolean;
        searchFields: string[];
        searchText: string;
    }
    export class FindResult {
        displayFieldName: string;
        feature: Graphic;
        foundFieldName: string;
        layerId: number;
        layerName: string;
    }
    export class FindTask {
        constructor(url: string, options?: Object);
        url: string;
        execute(findParameters: esri.tasks.FindParameters, callback?: Function, errback?: Function): dojo.Deferred<any>;
        onComplete(findResults: esri.tasks.FindResult[]): void;
        onError(error: Error): void;
        complete: FindResult[];
    }
    export class GPMessage {
        TYPE_ABORT: string;
        TYPE_EMPTY: string;
        TYPE_ERROR: string;
        TYPE_INFORMATIVE: string;
        TYPE_PROCESS_DEFINITION: string;
        TYPE_PROCESS_START: string;
        TYPE_PROCESS_STOP: string;
        TYPE_WARNING: string;
        description: string;
        type: number;
    }
    export class GeneralizeParameters {
        constructor();
        deviationUnit: string; // esri.tasks.GeometryService Constant.
        geometries: esri.geometry.Geometry[];
        maxDeviation: number;
    }
    export class GenerateRendererParameters {
        constructor();
        classificationDefinition: esri.tasks.ClassificationDefinition;
        where: string;
    }
    export class GenerateRendererTask {
        constructor(url: string, options?: Object);
        execute(generateRendererParameters: esri.tasks.GenerateRendererParameters, callback?: Function, errback?: Function): dojo.Deferred<any>;
        onComplete(renderer: esri.renderer.Renderer): void;
        onError(error: Error): void;
        // complete: esri.renderer.Renderer;
    }
    export class GeometryService {
        constructor(url : string);
        UNIT_FOOT: string;
        UNIT_KILOMETER: string;
        UNIT_METER: string;
        UNIT_NAUTICAL_MILE: string;
        UNIT_STATUTE_MILE: string;
        UNIT_US_NAUTICAL_MILE: string;
        UNIT_SQUARE_INCHES: string;
        UNIT_SQUARE_FEET: string;
        UNIT_SQUARE_YARDS: string;
        UNIT_ACRES: string;
        UNIT_SQUARE_MILES: string;
        UNIT_SQUARE_MILLIMETERS: string;
        UNIT_SQUARE_CENTIMETERS: string;
        UNIT_SQUARE_DECIMETERS: string;
        UNIT_SQUARE_METERS: string;
        UNIT_ARES: string;
        UNIT_HECTARES: string;
        UNIT_SQUARE_KILOMETERS: string;
        url: string;
        areasAndLengths(areasAndLengthsParameters: esri.tasks.AreasAndLengthsParameters, callback?: Function, errback?: Function): dojo.Deferred<any>;
        autoComplete(polygons: esri.geometry.Polygon[], polylines: esri.geometry.Polyline[], callback?: Function, errback?: Function): dojo.Deferred<any>;
        buffer(bufferParameter: esri.tasks.BufferParameters, callback?: Function, errback?: Function): dojo.Deferred<any>;
        convexHull(geometries: esri.geometry.Geometry[], callback?: Function, errback?: Function): dojo.Deferred<any>;
        cut(geometries: esri.geometry.Geometry[], cutterGeometry: esri.geometry.Geometry, callback?: Function, errback?: Function): dojo.Deferred<any>;
        difference(geometries: esri.geometry.Geometry[], geometry: esri.geometry.Geometry, callback?: Function, errback?: Function): dojo.Deferred<any>;
        distance(params: esri.tasks.DistanceParameters, callback?: Function, errback?: Function): dojo.Deferred<any>;
        generalize(params:esri.tasks.GeneralizeParameters, callback?: Function, errback?: Function): dojo.Deferred<any>;
        intersect(geometries: esri.geometry.Geometry[], geometry: esri.geometry.Geometry, callback?: Function, errback?: Function): dojo.Deferred<any>;
        labelPoints(polygons: esri.geometry.Geometry[], callback?: Function, errback?: Function): dojo.Deferred<any>;
        lengths(lengthsParameter: esri.tasks.LengthsParameters, callback?: Function, errback?: Function): dojo.Deferred<any>;
        offset(params: esri.tasks.OffsetParameters, callback?: Function, errback?: Function): dojo.Deferred<any>;
        project(params: esri.tasks.ProjectParameters, callback?: Function, errback?: Function): dojo.Deferred<any>;
        relation(relationParameters: esri.tasks.RelationParameters, callback?: Function, errback?: Function): dojo.Deferred<any>;
        reshape(targetGeometry: esri.geometry.Geometry, reshaperGeometry: esri.geometry.Geometry, callback?: Function, errback?: Function): dojo.Deferred<any>;
        simplify(geometries: esri.geometry.Geometry[], callback?: Function, errback?: Function): dojo.Deferred<any>;
        trimExtend(params: esri.tasks.TrimExtendParameters, callback?: Function, errback?: Function): dojo.Deferred<any>;
        union(geometries: esri.geometry.Geometry[], callback?: Function, errback?: Function): dojo.Deferred<any>;
        onAreasAndLengthsComplete(areasAndLengths: Object): void;
        onAutoCompleteComplete(polygons: esri.geometry.Polygon[]): void;
        onBufferComplete(geometries: esri.geometry.Geometry[]): void;
        onConvexHullComplete(geometry: esri.geometry.Geometry): void;
        onCutComplete(results: Object): void;
        onDifferenceComplete(geometries: esri.geometry.Geometry[]): void;
        onDistanceComplete(distance: number): void;
        onError(error: Error): void;
        onGeneralizeComplete(geometries: esri.geometry.Geometry[]): void;
        onIntersectComplete(geometries: esri.geometry.Geometry[]): void;
        onLabelPointsComplete(labelPoints: esri.geometry.Geometry[]): void;
        onLengthsComplete(lengths: Object): void;
        onOffsetComplete(geometries: esri.geometry.Geometry[]): void;
        onProjectComplete(geometries: esri.geometry.Geometry[]): void;
        onRelationComplete(relationships: Object[]): void;
        onReshapeComplete(geometry: esri.geometry.Geometry): void;
        onSimplifyComplete(geometries: esri.geometry.Geometry[]): void;
        onTrimExtendComplete(geometries: esri.geometry.Geometry[]): void;
        onUnionComplete(geometry: esri.geometry.Geometry): void;
        //    areas-and - lengths-complete : <Object> result;
        //auto - complete-complete : esri.geometry.Polygon[];
        //convex - hull-complete : esri.geometry.Geometry;
        //		cut-complete : <Object> result;
        //		difference-complete : esri.geometry.Geometry[];
        //		distance-complete : <number> distance;
        //error: void;
        //		generalize-complete : esri.geometry.Geometry[];
        //		intersect-complete : esri.geometry.Geometry[];
        //label - points-complete  : esri.geometry.Geometry[];
        //		lengths-complete : <Object> result;
        //		offset-complete : esri.geometry.Geometry[];
        //		relation-complete : void;
        //		reshape-complete : esri.geometry.Geometry;
        //		simplify-complete : esri.geometry.Geometry[];
        //trim - extend-complete : esri.geometry.Geometry[];
        //		union-complete : esri.geometry.Geometry;
    }

    export class Geoprocessor {
        constructor(url : string);
        outSpatialReference: SpatialReference;
        outputSpatialReference: SpatialReference; // deprecated since 2.0 => use outSpatialReference instead.
        processSpatialReference: SpatialReference;
        updateDelay: number;
        url: string;
        cancelJob(jobId: string, callback: Function, errback: Function): dojo.Deferred<any>;
        cancelJobStatusUpdates(jobId: string): void;
        checkJobStatus(jobId: string, callback?: Function, errback?: Function): void;
        execute(inputParameters: Object, callback?: Function, errback?: Function): dojo.Deferred<any>;
        getResultData(jobId: string, parameterName: string, callback?: Function, errback?: Function): dojo.Deferred<any>;
        getResultImage(jobId: string, parameterName: string, imageParameters: esri.tasks.IdentifyParameters, callback?: Function, errback?: Function): dojo.Deferred<any>;
        getResultImageLayer(jobId: string, parameterName: string, imageParameters: esri.tasks.IdentifyParameters, callback?: Function, errback?: Function): void;
        setOutSpatialReference(spatialReference: esri.SpatialReference): void;
        setOutputSpatialReference(spatialReference: esri.SpatialReference): void;
        setProcessSpatialReference(spatialReference: esri.SpatialReference): void;
        setUpdateDelay(delay: number): void;
        submitJob(inputParameters: Object, callback?: Function, statuscallback?: Function, errback?: Function): void;
        onError(error: Error): void;
        onExecuteComplete(results: esri.tasks.ParameterValue[], messages: esri.tasks.GPMessage[]): void;
        onGetResultDataComplete(result: esri.tasks.ParameterValue): void;
        onGetResultImageComplete(mapImage: esri.layers.MapImage): void;
        onGetResultImageLayerComplete(AGSDynamicMapServiceLayer: esri.layers.Layer): void;
        onJobCancel(status: Object): void;
        onJobComplete(status: esri.tasks.JobInfo): void;
        onStatusUpdate(status: esri.tasks.JobInfo): void;
        //execute-complete : ParameterValue[]; // TODO : remove all CSS stuff
        //		get - result - data-complete : ParameterValue;
        //get - result - image-complete : MapImage;
        //get - result - image - layer-complete : void;
        //		job-cancel : void;
        //		job-complete : void;
        //		status-update : void;
    }
    export class IdentifyParameters {
        constructor();
        LAYER_OPTION_TOP: string;
        LAYER_OPTION_VISIBLE: string;
        LAYER_OPTION_ALL: string;
        dpi: number;
        dynamicLayerInfos: esri.layers.DynamicLayerInfo[];
        geometry: esri.geometry.Geometry;
        height: number;
        layerDefinitions: string[];
        layerIds: number[];
        layerOption: string;
        layerTimeOptions: esri.layers.LayerTimeOptions[];
        mapExtent: esri.geometry.Extent;
        maxAllowableOffset: number;
        returnGeometry: boolean;
        spatialReference: SpatialReference;
        timeExtent: TimeExtent;
        tolerance: number;
        width: number;
    }
    export class IdentifyResult {
        displayFieldName: string;
        feature: Graphic;
        layerId: number;
        layerName: string;
    }
    export class IdentifyTask {
        constructor(url: string, options?: Object);
        url: string;
        execute(identifyParameters: esri.tasks.IdentifyParameters, callback?: Function, errback?: Function): dojo.Deferred<any>;
        onComplete(identifyResults: esri.tasks.IdentifyResult[]): void;
        onError(error: Error): void;
        complete: IdentifyResult[];
    }
    export class ImageServiceIdentifyParameters {
        constructor();
        geometry: esri.geometry.Geometry;
        mosaicRule: esri.layers.MosaicRule;
        pixelSize: esri.symbol.Symbol;
        pixelSizeX: number;
        pixelSizeY: number;
        returnGeometry: boolean;
        timeExtent: TimeExtent;
    }
    export class ImageServiceIdentifyResult {
        catalogItemVisibilities: number[];
        catalogItems: FeatureSet;
        location: esri.geometry.Point;
        name: string;
        objectId: number;
        properties: Object;
        value: string;
    }
    export class ImageServiceIdentifyTask {
        constructor(url: string);
        execute(params: esri.tasks.ImageServiceIdentifyParameters, callback?: Function, errback?: Function): dojo.Deferred<any>;
        onComplete(imageServiceIdentifyResult: esri.tasks.ImageServiceIdentifyResult): void;
        // complete: ImageServiceIdentifyResult; // Event to remove TODO : F.Leray
    }
    export class JobInfo {
        esriJobCancelled: string;
        esriJobCancelling: string;
        esriJobDeleted: string;
        esriJobDeleting: string;
        esriJobExecuting: string;
        esriJobFailed: string;
        esriJobNew: string;
        esriJobSubmitted: string;
        esriJobSucceeded: string;
        esriJobTimedOut: string;
        esriJobWaiting: string;
        jobId: string;
        jobStatus: string;
        messages: esri.tasks.GPMessage[];
    }
    export class LegendLayer {
        constructor();
        layerId: string;
        subLayerIds: string[];
    }
    export class LengthsParameters {
        constructor();
        calculationType: string; // planar, geodesic or preserveShape.
        geodesic: boolean; // Note:If you are using an ArcGIS Server 10.1 or greater then use the calculationType property instead.
        lengthUnit: esri.tasks.GeometryService;
        polylines: esri.geometry.Geometry[];
    }
    export class LinearUnit {
        constructor();
        distance: number;
        units: string; // esriMeters, esriMiles or esriKilometers
    }
    export class Locator {
        constructor(url: string);
        outSpatialReference: SpatialReference;
        url: string;
        addressToLocations(params: Object, callback?: Function, errback?: Function): dojo.Deferred<any>;
        addressesToLocations(params: Object, callback?: Function, errback?: Function): dojo.Deferred<any>;
        locationToAddress(location : esri.geometry.Point, distance: number, callback?: Function, errback?: Function): dojo.Deferred<any>;
        setOutSpatialReference(spatialReference: esri.SpatialReference): void;
        onAddressToLocationsComplete(addressCandidates: esri.tasks.AddressCandidate[]): void;
        onAddressesToLocationsComplete(addressCandidates: esri.tasks.AddressCandidate[]): void;
        onError(error: Error): void;
        onLocationToAddressComplete(addressCandidate: esri.tasks.AddressCandidate): void;
        //address-to - locations-complete : AddressCandidate[]; // TODO : remove all CSS stuff
        //addresses-to - locations-complete : AddressCandidate[];
        //location-to - address-complete : AddressCandidate;
    }

	export class ColorRamp {
		constructor();
	}

    export class MultipartColorRamp extends ColorRamp {
        constructor();
        colorRamps: esri.tasks.AlgorithmicColorRamp[];
        toJson(): Object;
    }
    export class NAMessage {
        TYPE_ABORT: string;
        TYPE_EMPTY: string;
        TYPE_ERROR: string;
        TYPE_INFORMATIVE: string;
        TYPE_PROCESS_DEFINITION: string;
        TYPE_PROCESS_START: string;
        TYPE_PROCESS_STOP: string;
        TYPE_WARNING: string;
        description: string;
        type: number;
    }
    export class NAOutputLine {
        NONE: string;
        STRAIGHT: string;
        TRUE_SHAPE: string;
        TRUE_SHAPE_WITH_MEASURE: string;
    }
    export class NAOutputPolygon {
        NONE: string;
        SIMPLIFIED: string;
        DETAILED: string;
    }
    export class NATravelDirection {
        FROM_FACILITY: string;
        TO_FACILITY: string;
    }
    export class NAUTurn {
        ALLOW_BACKTRACK: string;
        AT_DEAD_ENDS_ONLY: string;
        NO_BACKTRACK: string;
        AT_DEAD_ENDS_AND_INTERSECTIONS: string;
    }
    export class OffsetParameters {
        constructor();
        bevelRatio: number;
        geometries: esri.geometry.Geometry[];
        offsetDistance: number;
        offsetHow: string; // esriGeometryOffsetBevelled, esriGeometryOffsetMitered or esriGeometryOffsetRounded.
        offsetUnit: string;
    }
    export class ParameterValue {
        dataType: string;
        paramName: string;
        value: Object;
    }
    export class PrintParameters {
        constructor();
        extraParameters: Object;
        map: esri.Map;
        outSpatialReference: esri.SpatialReference;
        template: esri.tasks.PrintTemplate;
    }
    export class PrintTask {
        constructor(url: string, params: Object);
        url: string;
        execute(printParameters: esri.tasks.PrintParameters, callback?: Function, errback?: Function): dojo.Deferred<any>;
        onComplete(result: Object): void;
        onError(error: Error): void;
        // complete: <String> url;
    }
    export class PrintTemplate {
        constructor();
        exportOptions: Object;
        format: string;
        label: string;
        layout: string;
        layoutOptions: Object;
        preserveScale: boolean;
        showAttribution: boolean;
    }
    export class ProjectParameters {
        constructor();
        geometries: esri.geometry.Geometry[];
        outSR: esri.SpatialReference;
        transformation: Object;
        transformationForward: boolean;
    }
    export class Query {
        constructor();
        SPATIAL_REL_INTERSECTS: string;
        SPATIAL_REL_CONTAINS: string;
        SPATIAL_REL_CROSSES: string;
        SPATIAL_REL_ENVELOPEINTERSECTS: string;
        SPATIAL_REL_INDEXINTERSECTS: string;
        SPATIAL_REL_OVERLAPS: string;
        SPATIAL_REL_TOUCHES: string;
        SPATIAL_REL_WITHIN: string;
        SPATIAL_REL_RELATION: string;
        geometry: esri.geometry.Geometry;
        geometryPrecision: number;
        groupByFieldsForStatistics: string[];
        maxAllowableOffset: number;
        objectIds: number[];
        orderByFields: string[];
        outFields: string[];
        outSpatialReference: esri.SpatialReference;
        outStatistics: esri.tasks.StatisticDefinition[];
        pixelSize: esri.symbol.Symbol;
        relationParam: string;
        returnGeometry: boolean;
        spatialRelationship: string;
        text: string;
        timeExtent: TimeExtent;
        where: string;
    }
    export class QueryTask {
        constructor(url: string, options?: Object);
        url: string;
        execute(parameters: esri.tasks.Query, callback?: Function, errback?: Function): dojo.Deferred<any>;
        executeForCount(query: esri.tasks.Query, callback?: Function, errback?: Function): dojo.Deferred<any>;
        executeForIds(parameters: esri.tasks.Query, callback?: Function, errback?: Function): dojo.Deferred<any>;
        executeRelationshipQuery(parameters: esri.tasks.RelationshipQuery, callback?: Function, errback?: Function): dojo.Deferred<any>;
        onComplete(featureSet: esri.tasks.FeatureSet): void;
        onError(error: Error): void;
        onExecuteForCountComplete(count: number): void;
        onExecuteForIdsComplete(featureIds: number[]): void;
        onExecuteRelationshipQueryComplete(relatedFeatureSets: Object): void;
        //    complete: FeatureSet;
        //    execute-for-count-complete : <number> count;
        //		execute-for-ids-complete : <number[]> objectIds;
        //execute - relationship - query-complete : FeatureSet[];
    }
    export class RasterData {
        constructor();
        format: string;
        itemID: string;
        url: string;
    }
    export class RelationParameters {
        constructor();
        SPATIAL_REL_COINCIDENCE: string;
        SPATIAL_REL_CROSS: string;
        SPATIAL_REL_DISJOINT: string;
        SPATIAL_REL_IN: string;
        SPATIAL_REL_INTERIORINTERSECTION: string;
        SPATIAL_REL_INTERSECTION: string;
        SPATIAL_REL_LINETOUCH: string;
        SPATIAL_REL_OVERLAP: string;
        SPATIAL_REL_POINTTOUCH: string;
        SPATIAL_REL_RELATION: string;
        SPATIAL_REL_TOUCH: string;
        SPATIAL_REL_WITHIN: string;
        geometries1: esri.geometry.Geometry[];
        geometries2: esri.geometry.Geometry[];
        relation: esri.tasks.RelationParameters;
        relationParam: string;
    }
    export class RelationshipQuery {
        constructor();
        definitionExpression: string;
        geometryPrecision: number;
        maxAllowableOffset: number;
        objectIds: number[];
        outFields: number[];    
        outSpatialReference: esri.SpatialReference;
        relationshipId: number;
        returnGeometry: boolean;
    }
    export class RouteParameters {
        constructor();
        accumulateAttributes: string[];
        attributeParameterValues: Object[];
        barriers: Object;
        directionsLanguage: string;
        directionsLengthUnits: string;
        directionsOutputType: string;
        directionsStyleName: string;
        directionsTimeAttribute: string;
        doNotLocateOnRestrictedElements: boolean;
        findBestSequence: boolean;
        ignoreInvalidLocations: boolean;
        impedanceAttribute: string;
        outSpatialReference: esri.SpatialReference;
        outputGeometryPrecision: number;
        outputGeometryPrecisionUnits: string;
        outputLines: string;
        polygonBarriers: Object;
        polylineBarriers: Object;
        preserveFirstStop: boolean;
        preserveLastStop: boolean;
        restrictUTurns: string;
        restrictionAttributes: string[];
        returnBarriers: boolean;
        returnDirections: boolean;
        returnPolygonBarriers: boolean;
        returnPolylineBarriers: boolean;
        returnRoutes: boolean;
        returnStops: boolean;
        startTime: esri.tasks.Date;
        stops: Object;
        useHierarchy: boolean;
        useTimeWindows: boolean;
    }
    export class RouteResult {
        directions: esri.tasks.DirectionsFeatureSet;
        route: esri.Graphic;
        routeName: string;
        stops: esri.Graphic[];
    }
    export class RouteTask {
        constructor(url: string);
        url: string;
        solve(params: esri.tasks.RouteParameters, callback?: Function, errback?: Function): dojo.Deferred<any>;
        onError(error: Error): void;
        onSolveComplete(solveResults: Object): void;
        // solve-complete : <Object> result;
    }
    export class ServiceAreaParameters {
        constructor();
        accumulateAttributes: string[];
        attributeParameterValues: Object[];
        defaultBreaks: number[];
        doNotLocateOnRestrictedElements: boolean;
        excludeSourcesFromPolygons: string[];
        facilities: Object;
        impedanceAttribute: string;
        mergeSimilarPolygonRanges: boolean;
        outSpatialReference: esri.SpatialReference;
        outputGeometryPrecision: number;
        outputGeometryPrecisionUnits: string;
        outputLines: string;
        outputPolygons: string;
        overlapLines: boolean;
        overlapPolygons: boolean;
        pointBarriers: Object;
        polygonBarriers: Object;
        polylineBarriers: Object;
        restrictUTurns: string;
        restrictionAttributes: string[];
        returnFacilities: boolean;
        returnPointBarriers: boolean;
        returnPolygonBarriers: boolean;
        returnPolylineBarriers: boolean;
        splitLinesAtBreaks: boolean;
        splitPolygonsAtBreaks: boolean;
        timeOfDay: esri.tasks.Date;
        travelDirection: string;
        trimOuterPolygon: boolean;
        trimPolygonDistance: number;
        trimPolygonDistanceUnits: string;
        useHierarchy: boolean;
    }
    export class ServiceAreaSolveResult {
        facilities: esri.geometry.Point[];
        messages: NAMessage;
        pointBarriers: esri.geometry.Point[];
        polygonBarriers: esri.geometry.Polygon[];
        polylineBarriers: esri.geometry.Polyline[];
        serviceAreaPolygons: esri.Graphic[];
        serviceAreaPolylines: esri.Graphic[];
    }
    export class ServiceAreaTask {
        constructor();
        solve(params: esri.tasks.ServiceAreaParameters, callback?: Function, errback?: Function): dojo.Deferred<any>;
        onSolveComplete(serviceAreaSolveResult: esri.tasks.ServiceAreaSolveResult): void;
        //solve-complete : <ServiceAreaResult> result;
    }
    export class StatisticDefinition {
        constructor();
        onStatisticField: string;
        outStatisticFieldName: string;
        statisticType: string;
    }
    export class TrimExtendParameters {
        constructor();
        extendHow: string;
        polylines: esri.geometry.Polyline[];
        trimExtendTo: esri.geometry.Polyline;
    }
    export class UniqueValueDefinition {
        constructor();
        attributeField: string;
        attributeField2: string;
        attributeField3: string;
        baseSymbol: esri.symbol.Symbol;
        colorRamp: any; //AlgorithmicColorRamp || MultiFieldColorRamp;
        toJson(): Object;
    }
}
declare module esri.toolbars {
    export class Draw {
        constructor(map: esri.Map, options: Object);
        POINT: string;
        LINE: string;
        EXTENT: string;
        POLYLINE: string;
        POLYGON: string;
        FREEHAND_POLYLINE: string;
        FREEHAND_POLYGON: string;
        MULTI_POINT: string;
        ARROW: string;
        TRIANGLE: string;
        CIRCLE: string;
        ELLIPSE: string;
        RECTANGLE: string;
        LEFT_ARROW: string;
        RIGHT_ARROW: string;
        UP_ARROW: string;
        DOWN_ARROW: string;
        fillSymbol: esri.symbol.SimpleFillSymbol;
        lineSymbol: esri.symbol.SimpleLineSymbol;
        markerSymbol: esri.symbol.SimpleMarkerSymbol;
        respectDrawingVertexOrder: boolean;
        activate(geometryType: string, options: Object): void;
        deactivate(): void;
        finishDrawing(): void;
        setFillSymbol(fillSymbol: esri.symbol.FillSymbol): void;
        setLineSymbol(lineSymbol: esri.symbol.LineSymbol): void;
        setMarkerSymbol(markerSymbol: esri.symbol.MarkerSymbol): void;
        setRespectDrawingVertexOrder(respectDrawingVertexOrder: boolean): void;
        onDrawComplete(event: Event): void; // TODO F.Leray : to check again : documentation is missing about the type of argument passed to this method.
        onDrawEnd(geometry: esri.geometry.Geometry): void;
    }
    export class Edit {
        constructor(map: esri.Map, options?: Object);
        EDIT_VERTICES: string;
        MOVE: string;
        SCALE: string;
        ROTATE: string;
        activate(tool: string, graphic: esri.Graphic, options: Object): void;
        deactivate(): void;
        getCurrentState(): Object;
        refresh(): void;
        onActivate(tool: string, graphic: esri.Graphic): void;
        onDeactivate(tool: string, graphic: esri.Graphic, info: Object): void;
        onGraphicClick(graphic: esri.Graphic, info: Object): void;
        onGraphicFirstMove(graphic: esri.Graphic): void;
        onGraphicMove(graphic: esri.Graphic, transform: Object): void;
        onGraphicMoveStart(graphic: esri.Graphic): void;
        onGraphicMoveStop(graphic, transform): void;
        onRotate(graphic: esri.Graphic, info: Object): void;
        onRotateFirstMove(graphic: esri.Graphic): void;
        onRotateStart(graphic: esri.Graphic): void;
        onRotateStop(graphic: esri.Graphic, info: Object): void;
        onScale(graphic, info): void;
        onScaleFirstMove(graphic: esri.Graphic): void;
        onScaleStart(graphic: esri.Graphic): void;
        onScaleStop(graphic: esri.Graphic, info: Object): void;
        onVertexAdd(graphic: esri.Graphic, vertexInfo: Object): void;
        onVertexClick(graphic: esri.Graphic, vertexInfo: Object): void;
        onVertexDelete(graphic: esri.Graphic, vertexInfo: Object): void;
        onVertexFirstMove(graphic: esri.Graphic, vertexInfo: Object): void;
        onVertexMouseOut(graphic: esri.Graphic, vertexInfo: Object): void;
        onVertexMouseOver(graphic: esri.Graphic, vertexInfo: Object): void;
        onVertexMove(graphic: esri.Graphic, vertexInfo: Object, transform: Object): void;
        onVertexMoveStart(graphic: esri.Graphic, vertexInfo: Object): void;
        onVertexMoveStop(graphic: esri.Graphic, vertexInfo: Object, transform: Object): void;
    }
    export class Navigation {
        constructor(map: esri.Map);
        ZOOM_IN: string;
        ZOOM_OUT: string;
        PAN: string;
        activate(navType: string): void;
        deactivate(): void;
        isFirstExtent(): boolean;
        isLastExtent(): boolean;
        setZoomSymbol(symbol : esri.symbol.Symbol): void;
        zoomToFullExtent(): void;
        zoomToNextExtent(): void;
        zoomToPrevExtent(): void;
        onExtentHistoryChange(): void;
    }
}
declare module esri.virtualearth {
    export class VEAddress {
        addressLine: string;
        adminDistrict: string;
        countryRegion: string;
        district: string;
        formattedAddress: string;
        locality: string;
        postalCode: string;
        postalTown: string;
    }
    export class VEGeocodeResult {
        address: esri.virtualearth.VEAddress;
        bestView: esri.geometry.Extent;
        calculationMethod: string;
        confidence: string;
        displayName: string;
        entityType: string;
        location: esri.geometry.Point;
        matchCodes: string;
    }
    export class VEGeocoder {
        constructor(options : Object);
        culture: string;
        addressToLocations(query: string, callback?: Function, errback?: Function): dojo.Deferred<any>;
        setCulture(culture): string;
        onAddressToLocationsComplete(geocodeResults: esri.virtualearth.VEGeocodeResult[]): void;
        onError(error: Error): void;
    }
    export class VETiledLayer extends esri.layers.TiledMapServiceLayer {
        constructor(options: Object);
        MAP_STYLE_AERIAL: string;
        MAP_STYLE_AERIAL_WITH_LABELS: string;
        MAP_STYLE_ROAD: string;
        attributionDataUrl: string;
        copyright: string;
        credential: Credential;
        culture: string;
        fullExtent: esri.geometry.Extent;
        hasAttributionData: boolean;
        id: string;
        initialExtent: esri.geometry.Extent;
        loaded: boolean;
        mapStyle: string;
        maxScale: number;
        minScale: number;
        opacity: number;
        showAttribution: boolean;
        spatialReference: esri.SpatialReference;
        suspended: boolean;
        tileInfo: esri.layers.TileInfo;
        url: string;
        visible: boolean;
        visibleAtMapScale: boolean;
        getAttributionData(): dojo.Deferred<any>;
        getTileUrl(level: number, row: number, column: number): string;
        hide(): void;
        isVisibleAtScale(scale: number): boolean;
        refresh(): void;
        resume(): void;
        setCulture(culture: string): void;
        setMapStyle(style: string): void;
        setMaxScale(scale: number): void;
        setMinScale(scale: number): void;
        setOpacity(valueBetweenZeroAndOne : number): void;
        setScaleRange(minScale: number, maxScale: number): void;
        setVisibility(isVisible: boolean): void;
        show(): void;
        suspend(): void;
        onError(error: Error): void;
        onLoad(layer : esri.layers.Layer): void;
        onMapStyleChange(): void;
        onOpacityChange(opacity: number): void;
        onResume(): void;
        onScaleRangeChange(): void;
        onScaleVisibilityChange(): void;
        onSuspend(): void;
        onUpdate(): void;
        onUpdateEnd(error: Error): void;
        onUpdateStart(): void;
        onVisibilityChange(visibility: boolean): void;
        //    error: <Error> error;
        //    load: Layer;
        //    opacity-change : <number> opacity;
        //resume: void;
        //scale - range-change : void;
        //scale - visibility-change : void;
        //suspend: void;
        //	update-end : <Error> error;
        //	update-start : void;
        //	visibility-change : <boolean> visible;
    }


}

//class,esri/IdentityManager,IdentityManager
declare module "esri/IdentityManager" {
	var i : esri.IdentityManager;
	export = i;
}
//class,esri/IdentityManagerBase,IdentityManagerBase
declare module "esri/IdentityManagerBase" {
	var i : esri.IdentityManagerBase;
	export = i;
}
//class,esri/InfoTemplate,InfoTemplate
declare module "esri/InfoTemplate" {
	var i : esri.InfoTemplate;
	export = i;
}
//class,esri/InfoWindowBase,InfoWindowBase
declare module "esri/InfoWindowBase" {
	var i : esri.InfoWindowBase;
	export = i;
}
//class,esri/OperationBase,OperationBase
declare module "esri/OperationBase" {
	var i : esri.OperationBase;
	export = i;
}

/*
	not available yet
	@TODO

//class,esri/PopupBase,PopupBase
declare module "esri/PopupBase" {
	var i : esri.PopupBase;
	export = i;
}
*/

/*
	not available yet
	@TODO

//class,esri/PopupInfo,PopupInfo
declare module "esri/PopupInfo" {
	var i : esri.PopupInfo;
	export = i;
}
*/

//class,esri/ServerInfo,ServerInfo
declare module "esri/ServerInfo" {
	var i : esri.ServerInfo;
	export = i;
}
//class,esri/SnappingManager,SnappingManager
declare module "esri/SnappingManager" {
	var i : esri.SnappingManager;
	export = i;
}
//class,esri/SpatialReference,SpatialReference
declare module "esri/SpatialReference" {
	var i : esri.SpatialReference;
	export = i;
}
//class,esri/TimeExtent,TimeExtent
declare module "esri/TimeExtent" {
	var i : esri.TimeExtent;
	export = i;
}
//class,esri/arcgis/Portal,esriPortal
declare module "esri/arcgis/Portal" {
	var i : esri.arcgis.Portal;
	export = i;
}

/*
Dijit to do



//class,esri/dijit/AttributeInspector,AttributeInspector
declare module "esri/dijit/AttributeInspector" {
	var i : esri.dijit.AttributeInspector;
	export = i;
}
//class,esri/dijit/Attribution,Attribution
declare module "esri/dijit/Attribution" {
	var i : esri.dijit.Attribution;
	export = i;
}
//class,esri/dijit/Basemap,Basemap
declare module "esri/dijit/Basemap" {
	var i : esri.dijit.Basemap;
	export = i;
}
//class,esri/dijit/BasemapGallery,BasemapGallery
declare module "esri/dijit/BasemapGallery" {
	var i : esri.dijit.BasemapGallery;
	export = i;
}
//class,esri/dijit/BookmarkItem,BookmarkItem
declare module "esri/dijit/BookmarkItem" {
	var i : esri.dijit.BookmarkItem;
	export = i;
}
//class,esri/dijit/Bookmarks,Bookmarks
declare module "esri/dijit/Bookmarks" {
	var i : esri.dijit.Bookmarks;
	export = i;
}
//class,esri/dijit/Directions,Directions
declare module "esri/dijit/Directions" {
	var i : esri.dijit.Directions;
	export = i;
}
//class,esri/dijit/Gallery,Gallery
declare module "esri/dijit/Gallery" {
	var i : esri.dijit.Gallery;
	export = i;
}
//class,esri/dijit/Geocoder,Geocoder
declare module "esri/dijit/Geocoder" {
	var i : esri.dijit.Geocoder;
	export = i;
}
//class,esri/dijit/HistogramTimeSlider,HistogramTimeSlider
declare module "esri/dijit/HistogramTimeSlider" {
	var i : esri.dijit.HistogramTimeSlider;
	export = i;
}
//class,esri/dijit/InfoView,InfoView
declare module "esri/dijit/InfoView" {
	var i : esri.dijit.InfoView;
	export = i;
}
//class,esri/dijit/InfoWindow,InfoWindow
declare module "esri/dijit/InfoWindow" {
	var i : esri.dijit.InfoWindow;
	export = i;
}
//class,esri/dijit/InfoWindowLite,InfoWindowLite
declare module "esri/dijit/InfoWindowLite" {
	var i : esri.dijit.InfoWindowLite;
	export = i;
}
//class,esri/dijit/Legend,Legend
declare module "esri/dijit/Legend" {
	var i : esri.dijit.Legend;
	export = i;
}
//class,esri/dijit/Measurement,Measurement
declare module "esri/dijit/Measurement" {
	var i : esri.dijit.Measurement;
	export = i;
}
//class,esri/dijit/OverviewMap,OverviewMap
declare module "esri/dijit/OverviewMap" {
	var i : esri.dijit.OverviewMap;
	export = i;
}
//class,esri/dijit/Popup,Popup
declare module "esri/dijit/Popup" {
	var i : esri.dijit.Popup;
	export = i;
}
//class,esri/dijit/PopupMobile,PopupMobile
declare module "esri/dijit/PopupMobile" {
	var i : esri.dijit.PopupMobile;
	export = i;
}
//class,esri/dijit/PopupRenderer,PopupRenderer
declare module "esri/dijit/PopupRenderer" {
	var i : esri.dijit.PopupRenderer;
	export = i;
}
//class,esri/dijit/PopupTemplate,PopupTemplate
declare module "esri/dijit/PopupTemplate" {
	var i : esri.dijit.PopupTemplate;
	export = i;
}
//class,esri/dijit/Print,Print
declare module "esri/dijit/Print" {
	var i : esri.dijit.Print;
	export = i;
}
//class,esri/dijit/Scalebar,Scalebar
declare module "esri/dijit/Scalebar" {
	var i : esri.dijit.Scalebar;
	export = i;
}
//class,esri/dijit/TimeSlider,TimeSlider
declare module "esri/dijit/TimeSlider" {
	var i : esri.dijit.TimeSlider;
	export = i;
}
*/



/* new class 
   not available yet

//class,esri/dijit/analysisAggregateTool,AggregateTool
declare module "esri/dijit/analysisAggregateTool" {
	var i : esri.dijit.analysisAggregateTool;
	export = i;
}
//class,esri/dijit/analysisAnalysisBase,AnalysisBase
declare module "esri/dijit/analysisAnalysisBase" {
	var i : esri.dijit.analysisAnalysisBase;
	export = i;
}
//class,esri/dijit/analysisBufferTool,BufferTool
declare module "esri/dijit/analysisBufferTool" {
	var i : esri.dijit.analysisBufferTool;
	export = i;
}
//class,esri/dijit/analysisCreateDriveTimeAreas,CreateDriveTimeAreas
declare module "esri/dijit/analysisCreateDriveTimeAreas" {
	var i : esri.dijit.analysisCreateDriveTimeAreas;
	export = i;
}
//class,esri/dijit/analysisDissolveBoundaries,DissolveBoundaries
declare module "esri/dijit/analysisDissolveBoundaries" {
	var i : esri.dijit.analysisDissolveBoundaries;
	export = i;
}
//class,esri/dijit/analysisEnrichLayer,EnrichLayer
declare module "esri/dijit/analysisEnrichLayer" {
	var i : esri.dijit.analysisEnrichLayer;
	export = i;
}
//class,esri/dijit/analysisExtractData,ExtractData
declare module "esri/dijit/analysisExtractData" {
	var i : esri.dijit.analysisExtractData;
	export = i;
}
//class,esri/dijit/analysisFindHotSpots,FindHotSpots
declare module "esri/dijit/analysisFindHotSpots" {
	var i : esri.dijit.analysisFindHotSpots;
	export = i;
}
//class,esri/dijit/analysisFindNearest,FindNearest
declare module "esri/dijit/analysisFindNearest" {
	var i : esri.dijit.analysisFindNearest;
	export = i;
}
//class,esri/dijit/analysisMergeLayers,MergeLayers
declare module "esri/dijit/analysisMergeLayers" {
	var i : esri.dijit.analysisMergeLayers;
	export = i;
}
//class,esri/dijit/analysisOverlayLayers,OverlayLayers
declare module "esri/dijit/analysisOverlayLayers" {
	var i : esri.dijit.analysisOverlayLayers;
	export = i;
}
//class,esri/dijit/analysisSummarizeNearby,SummarizeNearby
declare module "esri/dijit/analysisSummarizeNearby" {
	var i : esri.dijit.analysisSummarizeNearby;
	export = i;
}
//class,esri/dijit/analysisSummarizeWithin,SummarizeWithin
declare module "esri/dijit/analysisSummarizeWithin" {
	var i : esri.dijit.analysisSummarizeWithin;
	export = i;
}

*/

/*

//class,esri/dijit/editing/AttachmentEditor,AttachmentEditor
declare module "esri/dijit/editing/AttachmentEditor" {
	var i : esri.dijit.editing.AttachmentEditor;
	export = i;
}
//class,esri/dijit/editing/Editor,Editor
declare module "esri/dijit/editing/Editor" {
	var i : esri.dijit.editing.Editor;
	export = i;
}
//class,esri/dijit/editing/TemplatePicker,TemplatePicker
declare module "esri/dijit/editing/TemplatePicker" {
	var i : esri.dijit.editing.TemplatePicker;
	export = i;
}
//class,esri/dijt/geoenrichment/Infographic,Infographic
declare module "esri/dijt/geoenrichment/Infographic" {
	var i : esri.dijt.geoenrichment.Infographic;
	export = i;
}
//class,esri/dijt/geoenrichment/InfographicsCarousel,InfographicsCarousel
declare module "esri/dijt/geoenrichment/InfographicsCarousel" {
	var i : esri.dijt.geoenrichment.InfographicsCarousel;
	export = i;
}
//class,esri/dijt/geoenrichment/InfographicsOptions,InfographicsOptions
declare module "esri/dijt/geoenrichment/InfographicsOptions" {
	var i : esri.dijt.geoenrichment.InfographicsOptions;
	export = i;
}

*/

//class,esri/geometry/Extent,Extent
declare module "esri/geometry/Extent" {
	var i : esri.geometry.Extent;
	export = i;
}
//class,esri/geometry/Geometry,Geometry
declare module "esri/geometry/Geometry" {
	var i : esri.geometry.Geometry;
	export = i;
}
//class,esri/geometry/Multipoint,Multipoint
declare module "esri/geometry/Multipoint" {
	var i : esri.geometry.Multipoint;
	export = i;
}
//class,esri/geometry/Point,Point
declare module "esri/geometry/Point" {
	var i : esri.geometry.Point;
	export = i;
}
//class,esri/geometry/Polygon,Polygon
declare module "esri/geometry/Polygon" {
	var i : esri.geometry.Polygon;
	export = i;
}
//class,esri/geometry/Polyline,Polyline
declare module "esri/geometry/Polyline" {
	var i : esri.geometry.Polyline;
	export = i;
}

//class,esri/geometry/ScreenPoint,ScreenPoint
declare module "esri/geometry/ScreenPoint" {
	var i : esri.geometry.ScreenPoint;
	export = i;
}
//class,esri/graphic,Graphic
declare module "esri/graphic" {
	var i : esri.Graphic;
	export = i;
}
//class,esri/layers/ArcGISDynamicMapServiceLayer,ArcGISDynamicMapServiceLayer
declare module "esri/layers/ArcGISDynamicMapServiceLayer" {
	var i : esri.layers.ArcGISDynamicMapServiceLayer;
	export = i;
}
//class,esri/layers/ArcGISImageServiceLayer,ArcGISImageServiceLayer
declare module "esri/layers/ArcGISImageServiceLayer" {
	var i : esri.layers.ArcGISImageServiceLayer;
	export = i;
}

/*
//class,esri/layers/ArcGISMapServiceLayer,ArcGISMapServiceLayer
declare module "esri/layers/ArcGISMapServiceLayer" {
	var i : esri.layers.ArcGISMapServiceLayer;
	export = i;
}
*/

//class,esri/layers/ArcGISTiledMapServiceLayer,ArcGISTiledMapServiceLayer
declare module "esri/layers/ArcGISTiledMapServiceLayer" {
	var i : esri.layers.ArcGISTiledMapServiceLayer;
	export = i;
}
//class,esri/layers/CodedValueDomain,CodedValueDomain
declare module "esri/layers/CodedValueDomain" {
	var i : esri.layers.CodedValueDomain;
	export = i;
}
//class,esri/layers/DataSource,DataSource
declare module "esri/layers/DataSource" {
	var i : esri.layers.DataSource;
	export = i;
}
//class,esri/layers/Domain,Domain
declare module "esri/layers/Domain" {
	var i : esri.layers.Domain;
	export = i;
}
//class,esri/layers/DynamicLayerInfo,DynamicLayerInfo
declare module "esri/layers/DynamicLayerInfo" {
	var i : esri.layers.DynamicLayerInfo;
	export = i;
}
//class,esri/layers/DynamicMapServiceLayer,DynamicMapServiceLayer
declare module "esri/layers/DynamicMapServiceLayer" {
	var i : esri.layers.DynamicMapServiceLayer;
	export = i;
}
//class,esri/layers/FeatureEditResult,FeatureEditResult
declare module "esri/layers/FeatureEditResult" {
	var i : esri.layers.FeatureEditResult;
	export = i;
}
//class,esri/layers/FeatureLayer,FeatureLayer
declare module "esri/layers/FeatureLayer" {
	var i : esri.layers.FeatureLayer;
	export = i;
}
//class,esri/layers/FeatureTemplate,FeatureTemplate
declare module "esri/layers/FeatureTemplate" {
	var i : esri.layers.FeatureTemplate;
	export = i;
}
//class,esri/layers/FeatureType,FeatureType
declare module "esri/layers/FeatureType" {
	var i : esri.layers.FeatureType;
	export = i;
}
//class,esri/layers/Field,Field
declare module "esri/layers/Field" {
	var i : esri.layers.Field;
	export = i;
}
//class,esri/layers/GeoRSSLayer,GeoRSSLayer
declare module "esri/layers/GeoRSSLayer" {
	var i : esri.layers.GeoRSSLayer;
	export = i;
}
//class,esri/layers/GraphicsLayer,GraphicsLayer
declare module "esri/layers/GraphicsLayer" {
	var i : esri.layers.GraphicsLayer;
	export = i;
}
//class,esri/layers/ImageParameters,ImageParameters
declare module "esri/layers/ImageParameters" {
	var i : esri.layers.ImageParameters;
	export = i;
}
//class,esri/layers/ImageServiceParameters,ImageServiceParameters
declare module "esri/layers/ImageServiceParameters" {
	var i : esri.layers.ImageServiceParameters;
	export = i;
}
//class,esri/layers/InheritedDomain,InheritedDomain
declare module "esri/layers/InheritedDomain" {
	var i : esri.layers.InheritedDomain;
	export = i;
}
//class,esri/layers/JoinDataSource,JoinDataSource
declare module "esri/layers/JoinDataSource" {
	var i : esri.layers.JoinDataSource;
	export = i;
}
//class,esri/layers/KMLFolder,KMLFolder
declare module "esri/layers/KMLFolder" {
	var i : esri.layers.KMLFolder;
	export = i;
}
//class,esri/layers/KMLGroundOverlay,KMLGroundOverlay
declare module "esri/layers/KMLGroundOverlay" {
	var i : esri.layers.KMLGroundOverlay;
	export = i;
}
//class,esri/layers/KMLLayer,KMLLayer
declare module "esri/layers/KMLLayer" {
	var i : esri.layers.KMLLayer;
	export = i;
}
//class,esri/layers/LOD,LOD
declare module "esri/layers/LOD" {
	var i : esri.layers.LOD;
	export = i;
}
//class,esri/layers/Layer,Layer
declare module "esri/layers/Layer" {
	var i : esri.layers.Layer;
	export = i;
}
//class,esri/layers/LayerDataSource,LayerDataSource
declare module "esri/layers/LayerDataSource" {
	var i : esri.layers.LayerDataSource;
	export = i;
}
//class,esri/layers/LayerDrawingOptions,LayerDrawingOptions
declare module "esri/layers/LayerDrawingOptions" {
	var i : esri.layers.LayerDrawingOptions;
	export = i;
}
//class,esri/layers/LayerInfo,LayerInfo
declare module "esri/layers/LayerInfo" {
	var i : esri.layers.LayerInfo;
	export = i;
}
//class,esri/layers/LayerMapSource,LayerMapSource
declare module "esri/layers/LayerMapSource" {
	var i : esri.layers.LayerMapSource;
	export = i;
}

/*
    not found
	TODO

//class,esri/layers/LayerSource,LayerSource
declare module "esri/layers/LayerSource" {
	var i : esri.layers.LayerSource;
	export = i;
}

*/


//class,esri/layers/LayerTimeOptions,LayerTimeOptions
declare module "esri/layers/LayerTimeOptions" {
	var i : esri.layers.LayerTimeOptions;
	export = i;
}
//class,esri/layers/MapImage,MapImage
declare module "esri/layers/MapImage" {
	var i : esri.layers.MapImage;
	export = i;
}
//class,esri/layers/MapImageLayer,MapImageLayer
declare module "esri/layers/MapImageLayer" {
	var i : esri.layers.MapImageLayer;
	export = i;
}
//class,esri/layers/MosaicRule,MosaicRule
declare module "esri/layers/MosaicRule" {
	var i : esri.layers.MosaicRule;
	export = i;
}
//class,esri/layers/OpenStreetMapLayer,OpenStreetMapLayer
declare module "esri/layers/OpenStreetMapLayer" {
	var i : esri.layers.OpenStreetMapLayer;
	export = i;
}
//class,esri/layers/QueryDataSource,QueryDataSource
declare module "esri/layers/QueryDataSource" {
	var i : esri.layers.QueryDataSource;
	export = i;
}
//class,esri/layers/RangeDomain,RangeDomain
declare module "esri/layers/RangeDomain" {
	var i : esri.layers.RangeDomain;
	export = i;
}
//class,esri/layers/RasterDataSource,RasterDataSource
declare module "esri/layers/RasterDataSource" {
	var i : esri.layers.RasterDataSource;
	export = i;
}

/*
  new class TODO
//class,esri/layers/StreamLayer,StreamLayer
declare module "esri/layers/StreamLayer" {
	var i : esri.layers.StreamLayer;
	export = i;
}

*/

//class,esri/layers/TableDataSource,TableDataSource
declare module "esri/layers/TableDataSource" {
	var i : esri.layers.TableDataSource;
	export = i;
}
//class,esri/layers/TileInfo,TileInfo
declare module "esri/layers/TileInfo" {
	var i : esri.layers.TileInfo;
	export = i;
}
//class,esri/layers/TiledMapServiceLayer,TiledMapServiceLayer
declare module "esri/layers/TiledMapServiceLayer" {
	var i : esri.layers.TiledMapServiceLayer;
	export = i;
}
//class,esri/layers/TimeInfo,TimeInfo
declare module "esri/layers/TimeInfo" {
	var i : esri.layers.TimeInfo;
	export = i;
}
//class,esri/layers/TimeReference,TimeReference
declare module "esri/layers/TimeReference" {
	var i : esri.layers.TimeReference;
	export = i;
}
//class,esri/layers/WMSLayer,WMSLayer
declare module "esri/layers/WMSLayer" {
	var i : esri.layers.WMSLayer;
	export = i;
}
//class,esri/layers/WMSLayerInfo,WMSLayerInfo
declare module "esri/layers/WMSLayerInfo" {
	var i : esri.layers.WMSLayerInfo;
	export = i;
}
//class,esri/layers/WMTSLayer,WMTSLayer
declare module "esri/layers/WMTSLayer" {
	var i : esri.layers.WMTSLayer;
	export = i;
}
//class,esri/layers/WMTSLayerInfo,WMTSLayerInfo
declare module "esri/layers/WMTSLayerInfo" {
	var i : esri.layers.WMTSLayerInfo;
	export = i;
}
//class,esri/layers/WebTiledLayer,WebTiledLayer
declare module "esri/layers/WebTiledLayer" {
	var i : esri.layers.WebTiledLayer;
	export = i;
}
//class,esri/map,Map
declare module "esri/map" {
	var i : esri.Map;
	export = i;
}
//class,esri/renderer/ClassBreaksRenderer,ClassBreaksRenderer
declare module "esri/renderers/ClassBreaksRenderer" {
	var i : esri.renderer.ClassBreaksRenderer;
	export = i;
}
//class,esri/renderer/Renderer,Renderer
declare module "esri/renderers/Renderer" {
	var i : esri.renderer.Renderer;
	export = i;
}
//class,esri/renderer/SimpleRenderer,SimpleRenderer
declare module "esri/renderers/SimpleRenderer" {
	var i : esri.renderer.SimpleRenderer;
	export = i;
}
//class,esri/renderer/SymbolAger,SymbolAger
declare module "esri/renderers/SymbolAger" {
	var i : esri.renderer.SymbolAger;
	export = i;
}
//class,esri/renderer/TemporalRenderer,TemporalRenderer
declare module "esri/renderers/TemporalRenderer" {
	var i : esri.renderer.TemporalRenderer;
	export = i;
}
//class,esri/renderer/TimeClassBreaksAger,TimeClassBreaksAger
declare module "esri/renderers/TimeClassBreaksAger" {
	var i : esri.renderer.TimeClassBreaksAger;
	export = i;
}
//class,esri/renderer/TimeRampAger,TimeRampAger
declare module "esri/renderers/TimeRampAger" {
	var i : esri.renderer.TimeRampAger;
	export = i;
}
//class,esri/renderer/UniqueValueRenderer,UniqueValueRenderer
declare module "esri/renderers/UniqueValueRenderer" {
	var i : esri.renderer.UniqueValueRenderer;
	export = i;
}
//class,esri.symbol.CartographicLineSymbol,CartographicLineSymbol
declare module "esri/symbols/CartographicLineSymbol" {
	var i : esri.symbol.CartographicLineSymbol;
	export = i;
}
//class,esri.symbol.FillSymbol,FillSymbol
declare module "esri/symbols/FillSymbol" {
	var i : esri.symbol.FillSymbol;
	export = i;
}
//class,esri.symbol.Font,Font
declare module "esri/symbols/Font" {
	var i : esri.symbol.Font;
	export = i;
}
//class,esri.symbol.LineSymbol,LineSymbol
declare module "esri/symbols/LineSymbol" {
	var i : esri.symbol.LineSymbol;
	export = i;
}
//class,esri.symbol.MarkerSymbol,MarkerSymbol
declare module "esri/symbols/MarkerSymbol" {
	var i : esri.symbol.MarkerSymbol;
	export = i;
}
//class,esri.symbol.PictureFillSymbol,PictureFillSymbol
declare module "esri/symbols/PictureFillSymbol" {
	var i : esri.symbol.PictureFillSymbol;
	export = i;
}
//class,esri.symbol.PictureMarkerSymbol,PictureMarkerSymbol
declare module "esri/symbols/PictureMarkerSymbol" {
	var i : esri.symbol.PictureMarkerSymbol;
	export = i;
}
//class,esri.symbol.SimpleFillSymbol,SimpleFillSymbol
declare module "esri/symbols/SimpleFillSymbol" {
	var i : esri.symbol.SimpleFillSymbol;
	export = i;
}
//class,esri.symbol.SimpleLineSymbol,SimpleLineSymbol
declare module "esri/symbols/SimpleLineSymbol" {
	var i : esri.symbol.SimpleLineSymbol;
	export = i;
}
//class,esri.symbol.SimpleMarkerSymbol,SimpleMarkerSymbol
declare module "esri/symbols/SimpleMarkerSymbol" {
	var i : esri.symbol.SimpleMarkerSymbol;
	export = i;
}
//class,esri.symbol.Symbol,Symbol
declare module "esri/symbols/Symbol" {
	var i : esri.symbol.Symbol;
	export = i;
}
//class,esri.symbol.TextSymbol,TextSymbol
declare module "esri/symbols/TextSymbol" {
	var i : esri.symbol.TextSymbol;
	export = i;
}
//class,esri/tasks/AddressCandidate,AddressCandidate
declare module "esri/tasks/AddressCandidate" {
	var i : esri.tasks.AddressCandidate;
	export = i;
}
//class,esri/tasks/AlgorithmicColorRamp,AlgorithmicColorRamp
declare module "esri/tasks/AlgorithmicColorRamp" {
	var i : esri.tasks.AlgorithmicColorRamp;
	export = i;
}
//class,esri/tasks/AreasAndLengthsParameters,AreasAndLengthsParameters
declare module "esri/tasks/AreasAndLengthsParameters" {
	var i : esri.tasks.AreasAndLengthsParameters;
	export = i;
}
//class,esri/tasks/BufferParameters,BufferParameters
declare module "esri/tasks/BufferParameters" {
	var i : esri.tasks.BufferParameters;
	export = i;
}
//class,esri/tasks/ClassBreaksDefinition,ClassBreaksDefinition
declare module "esri/tasks/ClassBreaksDefinition" {
	var i : esri.tasks.ClassBreaksDefinition;
	export = i;
}
//class,esri/tasks/ClassificationDefinition,ClassificationDefinition
declare module "esri/tasks/ClassificationDefinition" {
	var i : esri.tasks.ClassificationDefinition;
	export = i;
}
//class,esri/tasks/ClosestFacilityParameters,ClosestFacilityParameters
declare module "esri/tasks/ClosestFacilityParameters" {
	var i : esri.tasks.ClosestFacilityParameters;
	export = i;
}
//class,esri/tasks/ClosestFacilitySolveResult,ClosestFacilitySolveResult
declare module "esri/tasks/ClosestFacilitySolveResult" {
	var i : esri.tasks.ClosestFacilitySolveResult;
	export = i;
}
//class,esri/tasks/ClosestFacilityTask,ClosestFacilityTask
declare module "esri/tasks/ClosestFacilityTask" {
	var i : esri.tasks.ClosestFacilityTask;
	export = i;
}
//class,esri/tasks/ColorRamp,ColorRamp
declare module "esri/tasks/ColorRamp" {
	var i : esri.tasks.ColorRamp;
	export = i;
}
//class,esri/tasks/DataFile,DataFile
declare module "esri/tasks/DataFile" {
	var i : esri.tasks.DataFile;
	export = i;
}
//class,esri/tasks/DataLayer,DataLayer
declare module "esri/tasks/DataLayer" {
	var i : esri.tasks.DataLayer;
	export = i;
}
//class,esri/tasks/Date,EsriDate
declare module "esri/tasks/Date" {
	var i : esri.tasks.Date;
	export = i;
}

/* new class TODO

//class,esri/tasks/DensifyParameters,DensifyParameters
declare module "esri/tasks/DensifyParameters" {
	var i : esri.tasks.DensifyParameters;
	export = i;
}
*/

//class,esri/tasks/DirectionsFeatureSet,DirectionsFeatureSet
declare module "esri/tasks/DirectionsFeatureSet" {
	var i : esri.tasks.DirectionsFeatureSet;
	export = i;
}
//class,esri/tasks/DistanceParameters,DistanceParameters
declare module "esri/tasks/DistanceParameters" {
	var i : esri.tasks.DistanceParameters;
	export = i;
}
//class,esri/tasks/FeatureSet,FeatureSet
declare module "esri/tasks/FeatureSet" {
	var i : esri.tasks.FeatureSet;
	export = i;
}
//class,esri/tasks/FindParameters,FindParameters
declare module "esri/tasks/FindParameters" {
	var i : esri.tasks.FindParameters;
	export = i;
}
//class,esri/tasks/FindResult,FindResult
declare module "esri/tasks/FindResult" {
	var i : esri.tasks.FindResult;
	export = i;
}
//class,esri/tasks/FindTask,FindTask
declare module "esri/tasks/FindTask" {
	var i : esri.tasks.FindTask;
	export = i;
}
//class,esri/tasks/GPMessage,GPMessage
declare module "esri/tasks/GPMessage" {
	var i : esri.tasks.GPMessage;
	export = i;
}
//class,esri/tasks/GeneralizeParameters,GeneralizeParameters
declare module "esri/tasks/GeneralizeParameters" {
	var i : esri.tasks.GeneralizeParameters;
	export = i;
}
//class,esri/tasks/GenerateRendererParameters,GenerateRendererParameters
declare module "esri/tasks/GenerateRendererParameters" {
	var i : esri.tasks.GenerateRendererParameters;
	export = i;
}
//class,esri/tasks/GenerateRendererTask,GenerateRendererTask
declare module "esri/tasks/GenerateRendererTask" {
	var i : esri.tasks.GenerateRendererTask;
	export = i;
}
//class,esri/tasks/GeometryService,GeometryService
declare module "esri/tasks/GeometryService" {
	var i : esri.tasks.GeometryService;
	export = i;
}
//class,esri/tasks/Geoprocessor,Geoprocessor
declare module "esri/tasks/Geoprocessor" {
	var i : esri.tasks.Geoprocessor;
	export = i;
}
//class,esri/tasks/IdentifyParameters,IdentifyParameters
declare module "esri/tasks/IdentifyParameters" {
	var i : esri.tasks.IdentifyParameters;
	export = i;
}
//class,esri/tasks/IdentifyResult,IdentifyResult
declare module "esri/tasks/IdentifyResult" {
	var i : esri.tasks.IdentifyResult;
	export = i;
}
//class,esri/tasks/IdentifyTask,IdentifyTask
declare module "esri/tasks/IdentifyTask" {
	var i : esri.tasks.IdentifyTask;
	export = i;
}
//class,esri/tasks/ImageServiceIdentifyParameters,ImageServiceIdentifyParameters
declare module "esri/tasks/ImageServiceIdentifyParameters" {
	var i : esri.tasks.ImageServiceIdentifyParameters;
	export = i;
}
//class,esri/tasks/ImageServiceIdentifyResult,ImageServiceIdentifyResult
declare module "esri/tasks/ImageServiceIdentifyResult" {
	var i : esri.tasks.ImageServiceIdentifyResult;
	export = i;
}
//class,esri/tasks/ImageServiceIdentifyTask,ImageServiceIdentifyTask
declare module "esri/tasks/ImageServiceIdentifyTask" {
	var i : esri.tasks.ImageServiceIdentifyTask;
	export = i;
}
//class,esri/tasks/JobInfo,JobInfo
declare module "esri/tasks/JobInfo" {
	var i : esri.tasks.JobInfo;
	export = i;
}
//class,esri/tasks/LegendLayer,LegendLayer
declare module "esri/tasks/LegendLayer" {
	var i : esri.tasks.LegendLayer;
	export = i;
}
//class,esri/tasks/LengthsParameters,LengthsParameters
declare module "esri/tasks/LengthsParameters" {
	var i : esri.tasks.LengthsParameters;
	export = i;
}
//class,esri/tasks/LinearUnit,LinearUnit
declare module "esri/tasks/LinearUnit" {
	var i : esri.tasks.LinearUnit;
	export = i;
}
//class,esri/tasks/Locator,Locator
declare module "esri/tasks/Locator" {
	var i : esri.tasks.Locator;
	export = i;
}
//class,esri/tasks/MultipartColorRamp,MultipartColorRamp
declare module "esri/tasks/MultipartColorRamp" {
	var i : esri.tasks.MultipartColorRamp;
	export = i;
}
//class,esri/tasks/NAMessage,NAMessage
declare module "esri/tasks/NAMessage" {
	var i : esri.tasks.NAMessage;
	export = i;
}
//class,esri/tasks/OffsetParameters,OffsetParameters
declare module "esri/tasks/OffsetParameters" {
	var i : esri.tasks.OffsetParameters;
	export = i;
}
//class,esri/tasks/ParameterValue,ParameterValue
declare module "esri/tasks/ParameterValue" {
	var i : esri.tasks.ParameterValue;
	export = i;
}
//class,esri/tasks/PrintParameters,PrintParameters
declare module "esri/tasks/PrintParameters" {
	var i : esri.tasks.PrintParameters;
	export = i;
}
//class,esri/tasks/PrintTask,PrintTask
declare module "esri/tasks/PrintTask" {
	var i : esri.tasks.PrintTask;
	export = i;
}
//class,esri/tasks/PrintTemplate,PrintTemplate
declare module "esri/tasks/PrintTemplate" {
	var i : esri.tasks.PrintTemplate;
	export = i;
}
//class,esri/tasks/ProjectParameters,ProjectParameters
declare module "esri/tasks/ProjectParameters" {
	var i : esri.tasks.ProjectParameters;
	export = i;
}
//class,esri/tasks/QueryTask,QueryTask
declare module "esri/tasks/QueryTask" {
	var i : esri.tasks.QueryTask;
	export = i;
}
//class,esri/tasks/RasterData,RasterData
declare module "esri/tasks/RasterData" {
	var i : esri.tasks.RasterData;
	export = i;
}
//class,esri/tasks/RelationParameters,RelationParameters
declare module "esri/tasks/RelationParameters" {
	var i : esri.tasks.RelationParameters;
	export = i;
}
//class,esri/tasks/RelationshipQuery,RelationshipQuery
declare module "esri/tasks/RelationshipQuery" {
	var i : esri.tasks.RelationshipQuery;
	export = i;
}
//class,esri/tasks/RouteParameters,RouteParameters
declare module "esri/tasks/RouteParameters" {
	var i : esri.tasks.RouteParameters;
	export = i;
}
//class,esri/tasks/RouteResult,RouteResult
declare module "esri/tasks/RouteResult" {
	var i : esri.tasks.RouteResult;
	export = i;
}
//class,esri/tasks/RouteTask,RouteTask
declare module "esri/tasks/RouteTask" {
	var i : esri.tasks.RouteTask;
	export = i;
}
//class,esri/tasks/ServiceAreaParameters,ServiceAreaParameters
declare module "esri/tasks/ServiceAreaParameters" {
	var i : esri.tasks.ServiceAreaParameters;
	export = i;
}
//class,esri/tasks/ServiceAreaSolveResult,ServiceAreaSolveResult
declare module "esri/tasks/ServiceAreaSolveResult" {
	var i : esri.tasks.ServiceAreaSolveResult;
	export = i;
}
//class,esri/tasks/ServiceAreaTask,ServiceAreaTask
declare module "esri/tasks/ServiceAreaTask" {
	var i : esri.tasks.ServiceAreaTask;
	export = i;
}
//class,esri/tasks/StatisticDefinition,StatisticDefinition
declare module "esri/tasks/StatisticDefinition" {
	var i : esri.tasks.StatisticDefinition;
	export = i;
}
//class,esri/tasks/TrimExtendParameters,TrimExtendParameters
declare module "esri/tasks/TrimExtendParameters" {
	var i : esri.tasks.TrimExtendParameters;
	export = i;
}
//class,esri/tasks/UniqueValueDefinition,UniqueValueDefinition
declare module "esri/tasks/UniqueValueDefinition" {
	var i : esri.tasks.UniqueValueDefinition;
	export = i;
}
//class,esri/tasks/query,Query
declare module "esri/tasks/query" {
	var i : esri.tasks.Query;
	export = i;
}
//class,esri/toolbars/draw,Draw
declare module "esri/toolbars/draw" {
	var i : esri.toolbars.Draw;
	export = i;
}
//class,esri/toolbars/edit,Edit
declare module "esri/toolbars/edit" {
	var i : esri.toolbars.Edit;
	export = i;
}
//class,esri/toolbars/navigation,Navigation
declare module "esri/toolbars/navigation" {
	var i : esri.toolbars.Navigation;
	export = i;
}
//class,esri/undoManager,UndoManager
declare module "esri/undoManager" {
	var i : esri.UndoManager;
	export = i;
}
//class,esri/virtualearth/VEAddress,VEAddress
declare module "esri/virtualearth/VEAddress" {
	var i : esri.virtualearth.VEAddress;
	export = i;
}
//class,esri/virtualearth/VEGeocodeResult,VEGeocodeResult
declare module "esri/virtualearth/VEGeocodeResult" {
	var i : esri.virtualearth.VEGeocodeResult;
	export = i;
}
//class,esri/virtualearth/VEGeocoder,VEGeocoder
declare module "esri/virtualearth/VEGeocoder" {
	var i : esri.virtualearth.VEGeocoder;
	export = i;
}
//class,esri/virtualearth/VETiledLayer,VETiledLayer
declare module "esri/virtualearth/VETiledLayer" {
	var i : esri.virtualearth.VETiledLayer;
	export = i;
}



