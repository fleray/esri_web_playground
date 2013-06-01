// Type definitions for ArcGIS API for JavaScript Version 3.4
// Project: http://developers.arcgis.com/en/javascript/
// Definitions by: Fabrice Leray <https://github.com/fleray>
// Definitions: https://github.com/fleray/esri_web_playground.git

/// <reference path="dojo.d.ts" />

declare module esri {
    //export class renderer {
    //    export static fromJson(json) : Object;
    //}
    //export class symbol {
    //    export static fromJson(): esri.symbol.Symbol;
    //    export static getShapeDescriptors(): void;
    //}
    
    export class Credential {
        expires: string;
        isAdmin: Boolean;
        server: string;
        ssl: Boolean;
        token: string;
        userId: string;
        destroy(): void;
        refreshToken(): dojo.Deferred;
        toJson(): Object;
        onDestroy(): void;
        onTokenChange(): void;
    }
    export class Graphic {
        constructor(geometry, symbol, attributes, infoTemplate);
        constructor(json);
        attributes: Object;
        geometry: esri.geometry.Geometry;
        infoTemplate: InfoTemplate;
        symbol: esri.symbol.Symbol;
        visible: Boolean;
        getContent(): string;
        getDojoShape(): dojox.gfx.shape.Shape;
        getInfoTemplate(): InfoTemplate;
        getLayer(): esri.layers.GraphicsLayer;
        getTitle(): string;
        hide(): void;
        setAttributes(attributes): Graphic;
        setGeometry(geometry): Graphic;
        setInfoTemplate(infoTemplate): Graphic;
        setSymbol(symbol): Graphic;
        show(): void;
        toJson(): Object;
    }
    export class IdentityManager {
        esriSignInDialog: string;
        dialog: any; //dijit.Dialog;
        signIn(): dojo.Deferred;
        onDialogCancel(info): void;
        onDialogCreate(): void;
        dialogcancel: Object;
        dialogcreate: void;
    }
    export class IdentityManagerBase {
        tokenValidity: number;
        findCredential(url, userId): Credential;
        findServerInfo(url): ServerInfo;
        generateToken(serverInfo, userInfo, options): dojo.Deferred;
        getCredential(url, options): dojo.Deferred;
        initialize(json): Object;
        isBusy(): Boolean;
        registerServers(serverInfos): void;
        registerToken(properties): void;
        setProtocolErrorHandler(handlerFunction): void;
        setRedirectionHandler(handler): void;
        signIn(url, serverInfo, options): dojo.Deferred;
        toJson(): Object;
    }
    export class InfoTemplate {
        constructor();
        constructor(title, content);
        constructor(json);
        content: void;
        title: void;
        setContent(template): InfoTemplate;
        setTitle(template): InfoTemplate;
        toJson(): Object;
    }
    export class InfoWindowBase {
        domNode: Object;
        isShowing: Boolean;
        destroyDijits(): void;
        hide(): void;
        place(value, parentNode): void;
        resize(width, height): void;
        setContent(content): void;
        setMap(map): void;
        setTitle(title): void;
        show(location): void;
        startupDijits(): void;
        unsetMap(map): void;
        onHide(): void;
        onShow(): void;
    }
    export class Map {
        constructor(divId, options: Object);
        esriAttribution: string;
        esriAttributionOpen: string;
        attribution: esri.dijit.Attribution;
        autoResize: Boolean;
        extent: esri.geometry.Extent;
        fadeOnZoom: Boolean;
        force3DTransforms: Boolean;
        geographicExtent: esri.geometry.Extent;
        graphics: esri.layers.GraphicsLayer;
        graphicsLayerIds: void;
        height: number;
        id: string;
        infoWindow: esri.dijit.Popup;
        isClickRecenter: Boolean;
        isDoubleClickZoom: Boolean;
        isKeyboardNavigation: Boolean;
        isPan: Boolean;
        isPanArrows: Boolean;
        isRubberBandZoom: Boolean;
        isScrollWheelZoom: Boolean;
        isShiftDoubleClickZoom: Boolean;
        isZoomSlider: Boolean;
        layerIds: void;
        loaded: Boolean;
        navigationMode: string;
        position: esri.geometry.Point;
        root: any; //DOMNode;
        showAttribution: Boolean;
        snappingManager: SnappingManager;
        spatialReference: SpatialReference;
        timeExtent: TimeExtent;
        width: number;
        addLayer(layer, index?: number): esri.layers.Layer;
        addLayers(layers): void;
        centerAndZoom(mapPoint, levelOrFactor): dojo.Deferred;
        centerAt(mapPoint): dojo.Deferred;
        destroy(): void;
        disableClickRecenter(): void;
        disableDoubleClickZoom(): void;
        disableKeyboardNavigation(): void;
        disableMapNavigation(): void;
        disablePan(): void;
        disableRubberBandZoom(): void;
        disableScrollWheelZoom(): void;
        disableShiftDoubleClickZoom(): undefined;
        disableSnapping(): void;
        enableClickRecenter(): void;
        enableDoubleClickZoom(): void;
        enableKeyboardNavigation(): void;
        enableMapNavigation(): void;
        enablePan(): void;
        enableRubberBandZoom(): void;
        enableScrollWheelZoom(): void;
        enableShiftDoubleClickZoom(): void;
        enableSnapping(snapOptions): SnappingManager;
        getBasemap(): string;
        getInfoWindowAnchor(screenCoords): void;
        getLayer(id): esri.layers.Layer;
        getLayersVisibleAtScaleRange(scale): esri.layers.Layer[];
        getLevel(): void;
        getMaxScale(): number;
        getMaxZoom(): number;
        getMinScale(): number;
        getMinZoom(): number;
        getScale(): number;
        getZoom(): number;
        hidePanArrows(): void;
        hideZoomSlider(): void;
        panDown(): dojo.Deferred;
        panLeft(): dojo.Deferred;
        panLowerLeft(): dojo.Deferred;
        panLowerRight(): dojo.Deferred;
        panRight(): dojo.Deferred;
        panUp(): dojo.Deferred;
        panUpperLeft(): dojo.Deferred;
        panUpperRight(): dojo.Deferred;
        removeAllLayers(): void;
        removeLayer(layer): void;
        reorderLayer(layer, index): void;
        reposition(): void;
        resize(immediate): void;
        setBasemap(basemap): void;
        setExtent(extent, fit): dojo.Deferred;
        setLevel(level): void;
        setMapCursor(cursor): void;
        setScale(scale): dojo.Deferred;
        setTimeExtent(timeExtent): void;
        setTimeSlider(timeSlider): void;
        setZoom(zoom): dojo.Deferred;
        showPanArrows(): void;
        showZoomSlider(): void;
        toMap(screenPoint): esri.geometry.Point;
        toScreen(mapPoint): esri.geometry.Point;
        onBasemapChange(): void;
        onClick(event): void;
        onDblClick(event): void;
        onExtentChange(extent, delta, levelChange, lod): void;
        onKeyDown(keyEvent): void;
        onKeyUp(keyEvent): void;
        onLayerAdd(layer): void;
        onLayerAddResult(layer, error): void;
        onLayerRemove(): void;
        onLayerReorder(layer, index): void;
        onLayerResume(layer): void;
        onLayerSuspend(layer): void;
        onLayersAddResult(results): void;
        onLayersRemoved(): void;
        onLayersReordered(layerIds): void;
        onLoad(map): void;
        onMouseDown(event): void;
        onMouseDrag(event): void;
        onMouseDragEnd(event): void;
        onMouseDragStart(event): void;
        onMouseMove(event): void;
        onMouseOut(event): void;
        onMouseOver(event): void;
        onMouseUp(event): void;
        onMouseWheel(event): void;
        onPan(extent, delta): void;
        onPanEnd(extent, delta): void;
        onPanStart(extent, startPoint): void;
        onReposition(x, y): void;
        onResize(extent, width, height): void;
        onTimeExtentChange(timeExtent): void;
        onUnload(map): void;
        onUpdateEnd(): void;
        onUpdateStart(): void;
        onZoom(extent, zoomFactor, anchor): void;
        onZoomEnd(extent, zoomFactor, anchor, level): void;
        onZoomStart(extent, zoomFactor, anchor, level): void;
        //basemap-change : void;
        //click : <MouseEvent> <MouseEvent>;
        //dbl-click : <MouseEvent> <MouseEvent>;
        //extent-change : esri.geometry.Extent;
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
        //layers-reordered : <Number[]> layerIds;
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
        //reposition : <Number> x;
        //resize : esri.geometry.Extent;
        //time-extent-change : TimeExtent;
        //unload : Map;
        //update-end : <Error> error;
        //update-start : void;
        //zoom : esri.geometry.Extent;
        //zoom-end : esri.geometry.Extent;
        //zoom-start : esri.geometry.Extent;
    }
    export class OperationBase {
        constructor(params);
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
        constructor(options: Object);
        destroy(): void;
        getSnappingPoint(screenPoint): dojo.Deferred;
        setLayerInfos(setLayerInfos): void;
    }
    export class SpatialReference {
        constructor(json);
        constructor(wkid: number);
        constructor(wkt: string);
        wkid: number;
        wkt: string;
        equals(sr): Boolean;
        isWebMercator(): Boolean;
        toJson(): Object;
    }
    export class TimeExtent {
        constructor(startTime, endTime);
        endTime: Date;
        startTime: Date;
        intersection(timeExtent): TimeExtent;
        offset(offsetValue, offsetUnits): TimeExtent;
    }
    export class UndoManager {
        constructor(options);
        canRedo: Boolean;
        canUndo: Boolean;
        length: number;
        position: number;
        //add(operation) : void;
        //clearRedo() : void;
        //clearUndo() : void;
        //destroy() : void;
        //get(operation) : Operation;
        //peekRedo() : Operation;
        //peekUndo() : Operation;
        //redo() : void;
        //remove(operation) : Operation;
        //undo() : void;
        onAdd(): void;
        onChange(): void;
        onRedo(): void;
        onUndo(): void;
        //add : void;
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
declare module esri.arcgis {
    export class Portal {
        constructor(url);
        access: string;
        allSSL: Boolean;
        basemapGalleryGroupQuery: string;
        canSearchPublic: Boolean;
        canSharePublic: Boolean;
        created: Date;
        culture: string;
        defaultBasemap: Object;
        defaultExtent: Object;
        description: string;
        featuredGroups: Object[];
        featuredItemsGroupQuery: string;
        id: string;
        isOrganization: Boolean;
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
        queryGroups(queryParams): dojo.Deferred;
        queryItems(queryParams): dojo.Deferred;
        queryUsers(queryParams): dojo.Deferred;
        signIn(): dojo.Deferred;
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
        getItems(): dojo.Deferred;
    }
    export class PortalGroup {
        access: string;
        created: Date;
        description: string;
        id: string;
        isInvitationOnly: Boolean;
        isViewOnly: boolean;
        modified: Date;
        owner: Portal;
        portal: Portal;
        snippet: string;
        tags: String[];
        thumbnailUrl: string;
        title: string;
        url: string;
        getMembers(): dojo.Deferred;
        queryItems(queryParams): dojo.Deferred;
    }
    export class PortalGroupMembers {
        admins: String[];
        owner: string;
        users: String[];
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
        tags: String[];
        thumbnailUrl: string;
        title: string;
        type: string;
        typeKeywords: String[];
        url: string;
        userItemUrl: string;
        addComment(comment): dojo.Deferred;
        addRating(rating): void;
        deleteComment(comment): void;
        deleteRating(rating): dojo.Deferred;
        getComments(): dojo.Deferred;
        getRating(): dojo.Deferred;
        updateComment(comment): void;
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
        tags: String[];
        thumbnailUrl: string;
        userContentUrl: string;
        username: string;
        getFolders(): dojo.Deferred;
        getGroupInvitations(): dojo.Deferred;
        getGroups(): dojo.Deferred;
        getItem(itemId): PortalItem;
        getItems(folderId): dojo.Deferred;
        getNotifications(): dojo.Deferred;
        getTags(): void;
    }
}

declare module esri.dijit.editing {
    export class AttachmentEditor {
        constructor(params, srcNodeRef);
        showAttachments(graphic, featureLayer): void;
        startup(): void;
    }
}
declare module esri.dijit {
    export class AttributeInspector {
        constructor(params, srcNodeRef);
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
        onAttributeChange(feature, fieldName, fieldValue): void;
        onDelete(feature): void;
        onNext(feature): void;
    }
    export class Attribution {
        constructor(options, srcNodeRef);
        esriAttributionList: string;
        esriAttributionItem: string;
        esriAttributionLastItem: string;
        esriAttributionDelim: string;
        itemDelimiter: string;
        itemNodes: any; //HTML Span Element;
        listNode: any; //HTML Span Element;
        map: Map;
        destroy(): void;
    }
    export class Basemap {
        constructor(params?);
        id: string;
        thumbnailUrl: string;
        title: string;
        getLayers(): BasemapLayer[];
    }
    export class BasemapGallery {
        constructor(params, srcNodeRef?);
        esriBasemapGallery: string;
        esriBasemapGalleryNode: string;
        esriBasemapGallerySelectedNode: string;
        esriBasemapGalleryThumbnail: string;
        basemaps: Basemap[];
        loaded: Boolean;
        add(basemap): Boolean;
        destroy(): void;
        get(id): Basemap;
        getSelected(): Basemap;
        remove(id): Basemap;
        select(id): Basemap;
        startup(): void;
        onAdd(basemap): void;
        onError(): void;
        onLoad(): void;
        onRemove(basemap): void;
        onSelectionChange(): void;
    }
    export class BasemapLayer {
        constructor(params?);
    }
    export class BookmarkItem {
        constructor(name, extent);
    }
    export class Bookmarks {
        constructor(params, srcNodeRef);
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
        addBookmark(bookmarkItem): void;
        destroy(): void;
        hide(): void;
        removeBookmark(bookmarkName): void;
        show(): void;
        toJson(): Object;
        onClick(): void;
        onEdit(): void;
        onRemove(): void;
    }
    export class Directions {
        constructor(params, srcNodeRef);
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
        maxStopsReached: Boolean;
        mergedRouteGraphic: Graphic;
        stops: Graphic[];
        theme: string;
        addStop(stop, index): dojo.Deferred;
        addStops(stops, index): dojo.Deferred;
        centerAtSegmentStart(index): void;
        clearDirections(): void;
        destroy(): void;
        getDirections(): dojo.Deferred;
        highlightSegment(index): void;
        removeStop(index): dojo.Deferred;
        removeStops(): void;
        reset(): void;
        startup(): void;
        unhighlightSegment(): void;
        updateStop(stop, index): dojo.Deferred;
        updateStops(stops): dojo.Deferred;
        zoomToFullRoute(): void;
        zoomToSegment(index): void;
        onDirectionsClear(): void;
        onDirectionsFinish(result): void;
        onDirectionsStart(): void;
        onLoad(): void;
        onSegmentHighlight(graphic): void;
        onSegmentSelect(graphic): void;
    }
    export class Editor {
        constructor(params, srcNodeRef);
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
        constructor(params, srcNodeRef);
        esriMobileGallery: string;
        //esriMobileGallery.galleryLandscape : string;
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
        select(item): void;
        setFocus(item): void;
        startup(): void;
        onFocus(item): void;
        onSelect(item): void;
    }
    export class Gauge {
        constructor(params, srcNodeRef);
        gaugeContainer: string;
        destroy(): void;
        get(): number; //varies;
        set(): number; //varies;
        startup(): void;
    }
    export class Geocoder {
        constructor(params, srcNodeRef);
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
        autoComplete: Boolean;
        autoNavigate: Boolean;
        geocoder: Object[];
        geocoderMenu: Boolean;
        maxLocations: number;
        minCharacters: number;
        results: Object[];
        searchDelay: number;
        showResults: Boolean;
        theme: string;
        value: string;
        blur(): void;
        clear(): void;
        destroy(): void;
        find(): dojo.Deferred;
        focus(): void;
        hide(): void;
        select(result): void;
        show(): void;
        startup(): void;
        onAutoComplete(results): void;
        onClear(): void;
        onFindResults(results): void;
        onGeocoderSelect(geocoder): void;
        onSelect(results): void;
    }
    export class InfoWindow {
        constructor(params, srcNodeRef);
        ANCHOR_UPPERRIGHT: string;
        ANCHOR_LOWERRIGHT: string;
        ANCHOR_LOWERLEFT: string;
        ANCHOR_UPPERLEFT: string;
        anchor: string;
        coords: esri.geometry.Point;
        domNode: Object;
        fixedAnchor: string;
        isShowing: Boolean;
        destroyDijits(): void;
        hide(): void;
        move(point): void;
        place(value, parentNode): void;
        resize(width, height): void;
        setContent(content): InfoWindow;
        setFixedAnchor(anchor): void;
        setMap(map): void;
        setTitle(title): InfoWindow;
        show(point, location, placement): void;
        startupDijits(): void;
        unsetMap(map): void;
        onHide(): void;
        onShow(): void;
    }
    export class Legend {
        constructor(srcNodeRef, params);
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
        constructor(params, srcNodeRef);
        distanceIcon: string;
        areaIcon: string;
        locationIcon: string;
        unitDropDown: string;
        resultLabel: string;
        result: string;
        clearResult(): void;
        destroy(): void;
        hide(): void;
        hideTool(toolName): void;
        setTool(toolName, activate): void;
        show(): void;
        showTool(toolName): void;
        startup(): void;
        onMeasureEnd(activeToolName, geometry): void;
    }
    export class OverviewMap {
        constructor(params, srcNodeRef);
        destroy(): void;
        hide(): void;
        show(): void;
        startup(): void;
    }
    export class Popup {
        constructor(options: Object, srcNodeRef);
        count: number;
        deferreds: dojo.Deferred[];
        domNode: Object;
        features: Graphic[];
        isShowing: Boolean;
        selectedIndex: number;
        clearFeatures(): void;
        destroy(): void;
        destroyDijits(): void;
        getSelectedFeature(): Graphic;
        hide(): void;
        maximize(): void;
        place(value, parentNode): void;
        reposition(): void;
        resize(width: number, height: number): void;
        restore(): void;
        select(index): void;
        setContent(content: any): void;
        setFeatures(features): any[];// esri.Graphic[] | dojo.Deferred[];
        setMap(map): void;
        setTitle(title: string): void;
        show(location, options): void;
        startupDijits(): void;
        unsetMap(map): void;
        onClearFeatures(): void;
        onHide(): void;
        onMaximize(): void;
        onRestore(): void;
        onSelectionChange(): void;
        onSetFeatures(): void;
        onShow(): void;
    }
    export class PopupMobile {
        constructor(options: Object, srcNodeRef);
        titlePane: string;
        //pointer.top : string;
        //pointer.bottom : string;
        esriMobileNavigationBar: string;
        clearFeatures(): void;
        destroy(): void;
        getSelectedFeature(): Graphic;
        hide(): void;
        select(index): void;
        setContent(content): void;
        setFeatures(features): any[]; //Graphics[] | dojo.Deferred[];
        setTitle(title): void;
        show(location): void;
        onClearFeatures(): void;
        onHide(): void;
        onSelectionChange(): void;
        onSetFeatures(): void;
        onShow(): void;
    }
    export class PopupTemplate {
        constructor(popupInfo, options?);
        info: Object;
    }
    export class Print {
        constructor(params, srcNodeRef);
        esriPrint: string;
        esriPrintButton: string;
        esriPrintout: string;
        destroy(): void;
        hide(): void;
        show(): void;
        startup(): void;
        onError(error): void;
        onPrintComplete(value): void;
        onPrintStart(): void;
    }
    export class Scalebar {
        constructor(params, srcNodeRef?);
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
        constructor(params, srcNodeRef);
        templatePicker: string;
        // grid : string; // TODO FLE : virer tous les CSS !!!
        groupLabel: string;
        item: string;
        itemLabel: string;
        itemSymbol: string;
        selectedItem: string;
        // tooltip : string; // TODO FLE : virer tous les CSS !!!
        grid: dojox.grid.DataGrid;
        tooltip: any; //div;
        attr(name, value): void;
        clearSelection(): void;
        destroy(): void;
        getSelected(): Object;
        startup(): void;
        update(): void;
        onSelectionChange(): void;
    }
    export class TimeSlider {
        constructor(params, srcNodeRef);
        loop: Boolean;
        playing: Boolean;
        thumbCount: number;
        thumbMovingRate: number;
        timeStops: Date[];
        createTimeStopsByCount(timeExtent, count): void;
        createTimeStopsByTimeInterval(timeExtent, timeInterval, timeIntervalUnits): void;
        getCurrentTimeExtent(): TimeExtent;
        next(): void;
        pause(): void;
        play(): void;
        previous(): void;
        setLabels(labels): void;
        setLoop(loop): void;
        setThumbCount(thumbCount): void;
        setThumbIndexes(indexes): void;
        setThumbMovingRate(thumbMovingRate): void;
        setTickCount(count): void;
        setTimeStops(timeStops): void;
        singleThumbAsTimeInstant(createTimeInstants): void;
        onTimeExtentChange(timeExtent): void;
    }
}
declare module esri.geometry {
    export class Extent {
        constructor(xmin, ymin, xmax, ymax, spatialReference);
        constructor(json);
        spatialReference: SpatialReference;
        type: string;
        xmax: number;
        xmin: number;
        ymax: number;
        ymin: number;
        static centerAt(point): esri.geometry.Extent;
        contains(geometry): Boolean;
        expand(factor): esri.geometry.Extent;
        getCenter(): esri.geometry.Point;
        getHeight(): number;
        getWidth(): number;
        intersects(geometry): esri.geometry.Extent; // | Boolean;
        offset(dx, dy): esri.geometry.Extent;
        setSpatialReference(sr): esri.geometry.Geometry;
        toJson(): Object;
        union(extent): esri.geometry.Extent;
        update(xmin, ymin, xmax, ymax, spatialReference): esri.geometry.Extent;
    }
    export class Geometry {
        spatialReference: SpatialReference;
        type: string;
        setSpatialReference(sr): esri.geometry.Geometry;
        toJson(): Object;
    }
    export class Multipoint {
        constructor(spatialReference: esri.SpatialReference);
        constructor(json: string);
        points: Number[][];
        spatialReference: SpatialReference;
        type: string;
        addPoint(): Multipoint;
        getExtent(): esri.geometry.Extent;
        getPoint(index): esri.geometry.Point;
        removePoint(index): esri.geometry.Point;
        setPoint(index, point): Multipoint;
        setSpatialReference(sr): esri.geometry.Geometry;
        toJson(): Object;
    }
    export class Point {
        constructor(x: number, y: number, spatialReference: esri.SpatialReference);
        constructor(xy: number[], spatialReference: esri.SpatialReference);
        constructor(json: string);
        constructor(long: number, lat: number);
        constructor(point: esri.geometry.Point);
        // constructor(point);
        spatialReference: SpatialReference;
        type: string;
        x: number;
        y: number;
        getLatitude(): number;
        getLongitude(): number;
        offset(dx, dy): esri.geometry.Point;
        setLatitude(lat): esri.geometry.Point;
        setLongitude(lon): esri.geometry.Point;
        setSpatialReference(sr): esri.geometry.Geometry;
        setX(x): esri.geometry.Point;
        setY(y): esri.geometry.Point;
        toJson(): Object;
        update(x, y): esri.geometry.Point;
    }
    export class Polygon {
        constructor(spatialReference: esri.SpatialReference);
        constructor(json: Object);
        rings: Number[][][];
        spatialReference: esri.SpatialReference;
        type: string;
        addRing(): esri.geometry.Polygon;
        contains(point): Boolean;
        getExtent(): esri.geometry.Extent;
        getPoint(ringIndex, pointIndex): esri.geometry.Point;
        insertPoint(ringIndex, pointIndex, point): esri.geometry.Polygon;
        removePoint(ringIndex, pointIndex): esri.geometry.Point;
        removeRing(ringIndex): esri.geometry.Point[];
        setPoint(ringIndex, pointIndex, point): esri.geometry.Polygon;
        setSpatialReference(sr): esri.geometry.Geometry;
        toJson(): Object;
    }
    export class Polyline {
        constructor(spatialReference: esri.SpatialReference);
        constructor(json: string);
        paths: Number[][][];
        spatialReference: SpatialReference;
        type: string;
        addPath(): esri.geometry.Polyline;
        getExtent(): esri.geometry.Extent;
        getPoint(pathIndex, pointIndex): esri.geometry.Point;
        insertPoint(pathIndex, pointIndex, point): esri.geometry.Polyline;
        removePath(pathIndex): esri.geometry.Point[];
        removePoint(pathIndex, pointIndex): esri.geometry.Point;
        setPoint(pathIndex, pointIndex, point): esri.geometry.Polyline;
        setSpatialReference(sr): esri.geometry.Geometry;
        toJson(): Object;
    }
    export class ScreenPoint {
    }
    //export class namespace_geometry {
    //esri.geometry.fromJson(json) : Object;
    //esri.geometry.geodesicAreas(polygons,areaUnit) : Number[];
    //esri.geometry.geodesicDensify(geometry,maxSegmentLength) : esri.geometry.Geometry;
    //esri.geometry.geodesicLengths(polylines,lengthUnit) : Number[];
    //esri.geometry.geographicToWebMercator(geometry) : esri.geometry.Geometry;
    //esri.geometry.getExtentForScale(map,scale) : esri.geometry.Extent;
    //esri.geometry.getJsonType(geometry) : string;
    //esri.geometry.getLength(point1,point2) : number;
    //esri.geometry.getLineIntersection(line1start,line1end,line2start,line2end) : esri.geometry.Point;
    //esri.geometry.getScale(map) : number;
    //esri.geometry.isClockwise(ring) : void;
    //esri.geometry.lngLatToXY(long,lat,isLinear) : Number[];
    //esri.geometry.normalizeCentralMeridian(geometries,geometryService,callback,errback) : dojo.Deferred;
    //esri.geometry.polygonSelfIntersecting(polygon) : Boolean;
    //esri.geometry.toMapGeometry(extent,width,height,mapGeometry) : esri.geometry.Geometry;
    //esri.geometry.toMapPoint(extent,width,height,screenPoint) : esri.geometry.Point;
    //esri.geometry.toScreenGeometry(extent,width,height,screenGeometry) : esri.geometry.Geometry;
    //esri.geometry.toScreenPoint(extent,width,height,mapPoint) : ScreenPoint;
    //esri.geometry.webMercatorToGeographic(geometry) : esri.geometry.Geometry;
    //esri.geometry.xyToLngLat(long,lat) : Number[];
    //    }
}
declare module esri.layers {
    export class ArcGISDynamicMapServiceLayer {
        constructor(url, options?);
        attributionDataUrl: string;
        capabilities: string;
        copyright: string;
        credential: Credential;
        description: string;
        disableClientCaching: Boolean;
        dpi: number;
        dynamicLayerInfos: DynamicLayerInfo[];
        fullExtent: esri.geometry.Extent;
        hasAttributionData: Boolean;
        id: string;
        imageFormat: string;
        imageTransparency: Boolean;
        initialExtent: esri.geometry.Extent;
        layerDefinitions: String[];
        layerDrawingOptions: LayerDrawingOptions[];
        layerInfos: LayerInfo[];
        layerTimeOptions: LayerTimeOptions[];
        loaded: void;
        maxImageHeight: number;
        maxImageWidgth: number;
        maxRecordCount: number;
        maxScale: number;
        minScale: number;
        opacity: number;
        showAttribution: Boolean;
        spatialReference: esri.SpatialReference;
        suspended: Boolean;
        timeInfo: TimeInfo;
        units: string;
        url: void;
        useMapImage: Boolean;
        version: number;
        visible: Boolean;
        visibleAtMapScale: Boolean;
        visibleLayers: Number[];
        createDynamicLayerInfosFromLayerInfos(): DynamicLayerInfo[];
        exportMapImage(imageParameters, callback): void;
        getAttributionData(): dojo.Deferred;
        getImageUrl(extent, width, height, callback): string;
        hide(): void;
        isVisibleAtScale(scale): Boolean;
        refresh(): void;
        resume(): void;
        setDPI(dpi, doNotRefresh): void;
        setDefaultLayerDefinitions(doNotRefresh): void;
        setDefaultVisibleLayers(doNotRefresh): void;
        setDisableClientCaching(disable): void;
        setDynamicLayerInfos(dynamicLayerInfos, doNotRefresh): void;
        setGDBVersion(gdbVersion, doNotRefresh): void;
        setImageFormat(imageFormat, doNotRefresh): void;
        setImageTransparency(transparent, doNotRefresh): void;
        setLayerDefinitions(layerDefinitions, doNotRefresh): void;
        setLayerDrawingOptions(layerDrawingOptions, doNotRefresh): void;
        setLayerTimeOptions(options, doNotRefresh): void;
        setMaxScale(scale): void;
        setMinScale(scale): void;
        setOpacity(): void;
        setScaleRange(minScale: number, maxScale: number): void;
        setUseMapTime(update): void;
        setVisibility(isVisible): void;
        setVisibleLayers(ids, doNotRefresh): void;
        show(): void;
        suspend(): void;
        onError(error): void;
        onGDBVersionChange(): void;
        onLoad(layer): void;
        onMapImageExport(mapImage): void;
        onOpacityChange(opacity): void;
        onResume(): void;
        onScaleRangeChange(): void;
        onScaleVisibilityChange(): void;
        onSuspend(): void;
        onUpdate(): void;
        onUpdateEnd(error): void;
        onUpdateStart(): void;
        onVisibilityChange(visbility): void;
        //error : <Error> error;
        //gdb-version-change : void;
        //load : Layer;
        //map-image-export : MapImage;
        //opacity-change : <Number> opacity;
        //resume : void;
        //scale-range-change : void;
        //scale-visibility-change : void;
        //suspend : void;
        //update-end : <Error> error;
        //update-start : void;
        //visibility-change : <Boolean> visible;
    }
    export class ArcGISImageServiceLayer {
        constructor(url, options?);
        attributionDataUrl: string;
        bandCount: number;
        bandIds: Number[];
        bands: Object[];
        compressionQuality: number;
        copyrightText: string;
        credential: Credential;
        defaultMosaicRule: MosaicRule;
        description: string;
        disableClientCaching: Boolean;
        format: string;
        fullExtent: esri.geometry.Extent;
        hasAttributionData: Boolean;
        id: string;
        initialExtent: esri.geometry.Extent;
        interpolation: string;
        loaded: void;
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
        showAttribution: Boolean;
        spatialReference: SpatialReference;
        suspended: Boolean;
        timeInfo: TimeInfo;
        url: void;
        version: number;
        visible: Boolean;
        visibleAtMapScale: Boolean;
        exportMapImage(imageServiceParameters, callback): void;
        getAttributionData(): dojo.Deferred;
        getImageUrl(extent, width, height, callback): string;
        getKeyProperties(): dojo.Deferred;
        hide(): void;
        isVisibleAtScale(scale): Boolean;
        refresh(): void;
        resume(): void;
        setBandIds(bandIds, doNotRefresh): void;
        setCompressionQuality(quality, doNotRefresh): void;
        setDisableClientCaching(disable): void;
        setImageFormat(imageFormat, doNotRefresh): void;
        setInterpolation(interpolation, doNotRefresh): void;
        setMaxScale(scale): void;
        setMinScale(scale): void;
        setMosaicRule(mosaicRule, doNotRefresh): MosaicRule;
        setOpacity(): void;
        setRenderingRule(renderingRule, doNotRefresh): RasterFunction;
        setScaleRange(minScale, maxScale): void;
        setUseMapTime(update): void;
        setVisibility(isVisible): void;
        show(): void;
        suspend(): void;
        OnRenderingChange(): void;
        onError(error): void;
        onLoad(layer): void;
        onMapImageExport(mapImage): void;
        onOpacityChange(opacity): void;
        onResume(): void;
        onScaleRangeChange(): void;
        onScaleVisibilityChange(): void;
        onSuspend(): void;
        onUpdate(): void;
        onUpdateEnd(error): void;
        onUpdateStart(): void;
        onVisibilityChange(visbility): void;
        //error : <Error> error;
        //gdb-version-change : void;
        //load : Layer;
        //map-image-export : MapImage;
        //opacity-change : <Number> opacity;
        //rendering-change : void;
        //resume : void;
        //scale-range-change : void;
        //scale-visibility-change : void;
        //suspend : void;
        //update-end : <Error> error;
        //update-start : void;
        //visibility-change : <Boolean> visible;
    }
    export class ArcGISTiledMapServiceLayer {
        constructor(url, options?);
        attributionDataUrl: string;
        capabilities: string;
        copyright: string;
        credential: Credential;
        description: string;
        fullExtent: esri.geometry.Extent;
        hasAttributionData: Boolean;
        id: string;
        initialExtent: esri.geometry.Extent;
        layerInfos: LayerInfo[];
        loaded: void;
        maxImageHeight: number;
        maxImageWidgth: number;
        maxRecordCount: number;
        maxScale: number;
        minScale: number;
        opacity: number;
        showAttribution: Boolean;
        spatialReference: esri.SpatialReference;
        suspended: Boolean;
        tileInfo: TileInfo;
        timeInfo: TimeInfo;
        units: string;
        url: void;
        version: number;
        visible: Boolean;
        visibleAtMapScale: Boolean;
        getAttributionData(): dojo.Deferred;
        getTileUrl(level, row, column): string;
        hide(): void;
        isVisibleAtScale(scale): Boolean;
        refresh(): void;
        resume(): void;
        setMaxScale(scale): void;
        setMinScale(scale): void;
        setOpacity(): void;
        setScaleRange(minScale, maxScale): void;
        setVisibility(isVisible): void;
        show(): void;
        suspend(): void;
        onError(error): void;
        onLoad(layer): void;
        onOpacityChange(opacity): void;
        onResume(): void;
        onScaleRangeChange(): void;
        onScaleVisibilityChange(): void;
        onSuspend(): void;
        onUpdate(): void;
        onUpdateEnd(error): void;
        onUpdateStart(): void;
        onVisibilityChange(visbility): void;
        //error : <Error> error;
        load: Layer;
        //opacity-change : <Number> opacity;
        //resume : void;
        //scale-range-change : void;
        //scale-visibility-change : void;
        //suspend : void;
        //update-end : <Error> error;
        //update-start : void;
        //visibility-change : <Boolean> visible;
    }
    export class CodedValueDomain {
        codedValues: Object[];
    }
    export class Domain {
        name: string;
        type: string;
        toJson(): Object;
    }
    export class DynamicLayerInfo {
        constructor(json?);
        defaultVisibility: Boolean;
        id: number;
        maxScale: number;
        minScale: number;
        name: string;
        parentLayerId: number;
        source: LayerMapSource;
        subLayerIds: Number[];
        toJson(): Object;
    }
    export class DynamicMapServiceLayer {
        attributionDataUrl: string;
        credential: Credential;
        fullExtent: esri.geometry.Extent;
        hasAttributionData: Boolean;
        id: string;
        initialExtent: esri.geometry.Extent;
        loaded: void;
        maxScale: number;
        minScale: number;
        opacity: number;
        showAttribution: Boolean;
        spatialReference: SpatialReference;
        suspended: Boolean;
        url: void;
        visible: Boolean;
        visibleAtMapScale: Boolean;
        getAttributionData(): dojo.Deferred;
        getImageUrl(extent, width, height, callback): string;
        hide(): void;
        isVisibleAtScale(scale): Boolean;
        refresh(): void;
        resume(): void;
        setMaxScale(scale): void;
        setMinScale(scale): void;
        setOpacity(): void;
        setScaleRange(minScale, maxScale): void;
        setVisibility(isVisible): void;
        show(): void;
        suspend(): void;
        onError(error): void;
        onLoad(layer): void;
        onOpacityChange(opacity): void;
        onResume(): void;
        onScaleRangeChange(): void;
        onScaleVisibilityChange(): void;
        onSuspend(): void;
        onUpdate(): void;
        onUpdateEnd(error): void;
        onUpdateStart(): void;
        onVisibilityChange(visbility): void;
        //error : <Error> error;
        //gdb-version-change : void;
        load: Layer;
        //map-image-export : MapImage;
        //opacity-change : <Number> opacity;
        //resume : void;
        //scale-range-change : void;
        //scale-visibility-change : void;
        //suspend : void;
        //update-end : <Error> error;
        //update-start : void;
        //visibility-change : <Boolean> visible;
    }
    export class FeatureEditResult {
        attachmentId: number;
        error: Error;
        objectId: number;
        success: Boolean;
    }
    export class FeatureLayer {
        constructor(url: string, options?);
        constructor(featureCollectionObject: Object, options?);
        SELECTION_SUBTRACT: string;
        MODE_SNAPSHOT: string;
        MODE_ONDEMAND: string;
        MODE_SELECTION: string;
        POPUP_NONE: string;
        POPUP_HTML_TEXT: string;
        POPUP_URL: string;
        SELECTION_ADD: string;
        SELECTION_NEW: string;
        allowGeometryUpdates: Boolean;
        attributionDataUrl: string;
        capabilities: string;
        copyright: string;
        defaultDefinitionExpression: string;
        defaultVisibility: Boolean;
        description: string;
        displayField: string;
        editFieldsInfo: Object;
        fields: Field[];
        fullExtent: esri.geometry.Extent;
        geometryType: string;
        globalIdField: string;
        graphics: Graphic[];
        hasAttachments: Boolean;
        hasAttributionData: Boolean;
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
        showAttribution: Boolean;
        source: LayerMapSource;
        supportsAdvancedQueries: Boolean;
        supportsStatistics: Boolean;
        suspended: Boolean;
        templates: FeatureTemplate[];
        timeInfo: TimeInfo;
        type: string;
        typeIdField: string;
        types: FeatureType[];
        version: number;
        visibleAtMapScale: Boolean;
        addAttachment(objectId, formNode, callback, errback): dojo.Deferred;
        applyEdits(adds, updates, deletes, callback, errback): dojo.Deferred;
        clearSelection(): FeatureLayer;
        deleteAttachments(objectId, attachmentIds, callback, errback): dojo.Deferred;
        getAttributionData(): dojo.Deferred;
        getDefinitionExpression(): string;
        getEditCapabilities(options): Object;
        getEditInfo(feature, options): Object; // or Undefined;
        getEditSummary(feature, options): string;
        getMaxAllowableOffset(): number;
        getSelectedFeatures(): esri.Graphic[];
        getSelectionSymbol(): esri.symbol.Symbol;
        getTimeDefinition(): TimeExtent;
        isEditable(): Boolean;
        isVisibleAtScale(scale): Boolean;
        queryAttachmentInfos(objectId, callback, errback): dojo.Deferred;
        queryCount(query, callback, errback): dojo.Deferred;
        queryFeatures(query, callback, errback): dojo.Deferred;
        queryIds(query, callback, errback): dojo.Deferred;
        queryRelatedFeatures(relQuery, callback, errback): dojo.Deferred;
        redraw(): void;
        refresh(): void;
        resume(): void;
        selectFeatures(query, selectionMethod, callback, errback): dojo.Deferred;
        setAutoGeneralize(enable): FeatureLayer;
        setDefinitionExpression(expression): FeatureLayer;
        setEditable(editable): FeatureLayer;
        setGDBVersion(versionName): FeatureLayer;
        setInfoTemplate(infoTemplate): void;
        setMaxAllowableOffset(offset): void;
        setMaxScale(scale): void;
        setMinScale(scale): void;
        setOpacity(opacity): void;
        setRenderer(renderer): void;
        setScaleRange(minScale, maxScale): void;
        setSelectionSymbol(symbol): FeatureLayer;
        setTimeDefinition(definition): FeatureLayer;
        setTimeOffset(offsetValue, offsetUnits): FeatureLayer;
        setUseMapTime(update): void;
        suspend(): void;
        toJson(): Object;
        onAddAttachmentComplete(result): void;
        onBeforeApplyEdits(adds, updates, deletes): void;
        onCapabilitiesChange(): void;
        onDblClick(event): void;
        onDeleteAttachmentsComplete(results): void;
        onEditsComplete(addResults, updateResults, deleteResults): void;
        onQueryAttachmentInfosComplete(attachmentInfos): void;
        onQueryCountComplete(count): void;
        onQueryFeaturesComplete(featureSet): void;
        onQueryIdsComplete(ids): void;
        onQueryLimitExceeded(): void;
        onQueryRelatedFeaturesComplete(relatedFeatures): void;
        onResume(): void;
        onScaleRangeChange(): void;
        onScaleVisibilityChange(): void;
        onSelectionClear(): void;
        onSelectionComplete(features, selectionMethod): void;
        onSuspend(): void;
        onUpdateEnd(error, info): void;
        onUpdateStart(): void;
        //add-attachment-complete : FeatureEditResult;
        //before-apply-edits : Graphic[];
        //capabilities-change : void;
        //delete-attachments-complete : <Object[]> results;
        //edits-complete : FeatureEditResult[];
        //query-attachment-infos-complete : <Object[]> info;
        //query-count-complete : <Number> count;
        //query-features-complete : FeatureSet;
        //query-ids-complete : <Number[]> objectIds;
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
        editable: Boolean;
        length: number;
        name: string;
        nullable: Boolean;
        type: string;
    }
    export class GeoRSSLayer {
        constructor(url, options?);
        copyright: string;
        defaultVisibility: Boolean;
        description: string;
        items: Graphic[];
        name: string;
        getFeatureLayers(): FeatureLayer[];
        onRefresh(): void;
    }
    export class GraphicsLayer {
        constructor();
        constructor(options: Object);
        attributionDataUrl: string;
        credential: Credential;
        graphics: Graphic[];
        hasAttributionData: Boolean;
        id: string;
        loaded: void;
        maxScale: number;
        minScale: number;
        opacity: number;
        renderer: esri.renderer.Renderer;
        showAttribution: Boolean;
        suspended: Boolean;
        url: void;
        visible: Boolean;
        visibleAtMapScale: Boolean;
        add(graphic): Graphic;
        clear(): void;
        disableMouseEvents(): void;
        enableMouseEvents(): void;
        getAttributionData(): dojo.Deferred;
        hide(): void;
        isVisibleAtScale(scale): Boolean;
        redraw(): void;
        remove(graphic): Graphic;
        resume(): void;
        setInfoTemplate(infoTemplate): void;
        setMaxScale(scale): void;
        setMinScale(scale): void;
        setOpacity(opacity): void;
        setRenderer(renderer): void;
        setScaleRange(minScale, maxScale): void;
        setVisibility(isVisible): void;
        show(): void;
        suspend(): void;
        onClick(event): void;
        onDblClick(event): void;
        onError(error): void;
        onGraphicAdd(graphic): void;
        onGraphicRemove(graphic): void;
        onGraphicsClear(): void;
        onLoad(layer): void;
        onMouseDown(event): void;
        onMouseDrag(event): void;
        onMouseMove(event): void;
        onMouseOut(event): void;
        onMouseOver(event): void;
        onMouseUp(event): void;
        onOpacityChange(opacity): void;
        onResume(): void;
        onScaleRangeChange(): void;
        onScaleVisibilityChange(): void;
        onSuspend(): void;
        onUpdate(): void;
        onUpdateEnd(error): void;
        onUpdateStart(): void;
        onVisibilityChange(visbility): void;
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
        //opacity-change : <Number> opacity;
        // resume : void;
        //scale-range-change : void;
        //scale-visibility-change : void;
        //suspend : void;
        //update-end : <Error> error;
        //update-start : void;
        //visibility-change : <Boolean> visible;
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
        layerDefinitions: String[];
        layerIds: void;
        layerOption: string;
        layerTimeOptions: LayerTimeOptions[];
        timeExtent: TimeExtent;
        transparent: Boolean;
        width: number;
    }
    export class ImageServiceParameters {
        constructor();
        INTERPOLATION_BILINEAR: string;
        INTERPOLATION_CUBICCONVOLUTION: string;
        INTERPOLATION_MAJORITY: string;
        INTERPOLATION_NEARESTNEIGHBOR: string;
        bandIds: Number[];
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
    export class InheritedDomain {
    }
    export class JoinDataSource {
        constructor(json?);
        joinType: string;
        leftTableKey: string;
        leftTableSource: LayerMapSource;
        rightTableKey: string;
        rightTableSource: LayerMapSource;
        toJson(): Object;
    }
    export class KMLFolder {
        description: string;
        featureInfos: Object[];
        id: number;
        name: string;
        parentFolderId: number;
        snippet: string;
        subFolderIds: Number[];
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
    export class KMLLayer {
        constructor(id, url, options?);
        attributionDataUrl: string;
        credential: Credential;
        featureInfos: Object[];
        folders: KMLFolder[];
        hasAttributionData: Boolean;
        id: string;
        linkInfo: Object;
        loaded: void;
        maxScale: number;
        minScale: number;
        opacity: number;
        showAttribution: Boolean;
        suspended: Boolean;
        url: void;
        visible: Boolean;
        visibleAtMapScale: Boolean;
        getAttributionData(): dojo.Deferred;
        getFeature(featureInfo): Object;
        getLayers(): Layer[];
        hide(): void;
        isVisibleAtScale(scale): Boolean;
        resume(): void;
        setFolderVisibility(folder: esri.layers.KMLFolder, visibility: boolean): void;
        setMaxScale(scale): void;
        setMinScale(scale): void;
        setOpacity(): void;
        setScaleRange(minScale, maxScale): void;
        setVisibility(isVisible): void;
        show(): void;
        suspend(): void;
        onError(error): void;
        onLoad(layer): void;
        onOpacityChange(opacity): void;
        onRefresh(): void;
        onResume(): void;
        onScaleRangeChange(): void;
        onScaleVisibilityChange(): void;
        onSuspend(): void;
        onUpdate(): void;
        onUpdateEnd(error): void;
        onUpdateStart(): void;
        onVisibilityChange(visbility): void;
        //error : <Error> error;
        //load : Layer;
        //opacity-change : <Number> opacity;
        //resume : void;
        //scale-range-change : void;
        //scale-visibility-change : void;
        //suspend : void;
        //update-end : <Error> error;
        //update-start : void;
        //visibility-change : <Boolean> visible;
    }
    export class LOD {
        level: void;
        levelValue: string;
        resolution: number;
        scale: number;
    }
    export class Layer {
        constructor(options: Object);
        attributionDataUrl: string;
        credential: Credential;
        hasAttributionData: Boolean;
        id: string;
        loaded: void;
        maxScale: number;
        minScale: number;
        opacity: number;
        showAttribution: Boolean;
        suspended: Boolean;
        url: void;
        visible: Boolean;
        visibleAtMapScale: Boolean;
        getAttributionData(): dojo.Deferred;
        hide(): void;
        isVisibleAtScale(scale): Boolean;
        resume(): void;
        setMaxScale(scale): void;
        setMinScale(scale): void;
        setOpacity(): void;
        setScaleRange(minScale, maxScale): void;
        setVisibility(isVisible): void;
        show(): void;
        suspend(): void;
        onError(error): void;
        onLoad(layer): void;
        onOpacityChange(opacity): void;
        onResume(): void;
        onScaleRangeChange(): void;
        onScaleVisibilityChange(): void;
        onSuspend(): void;
        onUpdate(): void;
        onUpdateEnd(error): void;
        onUpdateStart(): void;
        onVisibilityChange(visbility): void;
        //error : <Error> error;
        //load : Layer;
        //opacity-change : <Number> opacity;
        //resume : void;
        //scale-range-change : void;
        //scale-visibility-change : void;
        //suspend : void;
        //update-end : <Error> error;
        //update-start : void;
        //visibility-change : <Boolean> visible;
    }
    export class LayerDataSource {
        constructor(json?);
        dataSource: Object;
        toJson(): Object;
    }
    export class LayerDrawingOptions {
        constructor(json?);
        renderer: esri.renderer.Renderer;
        scaleSymbols: Boolean;
        showLabels: Boolean;
        transparency: number;
        toJson(): Object;
    }
    export class LayerInfo {
        defaultVisibility: Boolean;
        id: number;
        maxScale: number;
        minScale: number;
        name: string;
        parentLayerId: number;
        subLayerIds: Number[];
    }
    export class LayerMapSource {
        constructor(json?);
        gdbVersion: string;
        mapLayerId: number;
        toJson(): Object;
    }
    export class LayerTimeOptions {
        timeDataCumulative: Boolean;
        timeOffset: void;
        timeOffsetUnits: void;
        useTime: Boolean;
    }
    export class MapImage {
        constructor(options);
        extent: esri.geometry.Extent;
        height: number;
        href: string;
        scale: number;
        width: number;
    }
    export class MapImageLayer {
        constructor(options: Object);
        attributionDataUrl: string;
        credential: Credential;
        hasAttributionData: Boolean;
        id: string;
        loaded: void;
        maxScale: number;
        minScale: number;
        opacity: number;
        showAttribution: Boolean;
        suspended: Boolean;
        url: void;
        visible: Boolean;
        visibleAtMapScale: Boolean;
        addImage(mapImage): void;
        getAttributionData(): dojo.Deferred;
        getImages(): MapImage[];
        hide(): void;
        isVisibleAtScale(scale): Boolean;
        removeAllImages(): void;
        removeImage(mapImage): void;
        resume(): void;
        setMaxScale(scale): void;
        setMinScale(scale): void;
        setOpacity(): void;
        setScaleRange(minScale, maxScale): void;
        setVisibility(isVisible): void;
        show(): void;
        suspend(): void;
        onError(error): void;
        onLoad(layer): void;
        onOpacityChange(opacity): void;
        onResume(): void;
        onScaleRangeChange(): void;
        onScaleVisibilityChange(): void;
        onSuspend(): void;
        onUpdate(): void;
        onUpdateEnd(error): void;
        onUpdateStart(): void;
        onVisibilityChange(visbility): void;
        //error : <Error> error;
        //load : Layer;
        //opacity-change : <Number> opacity;
        //resume : void;
        //scale-range-change : void;
        //scale-visibility-change : void;
        //suspend : void;
        //update-end : <Error> error;
        //update-start : void;
        //visibility-change : <Boolean> visible;
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
        ascending: Boolean;
        lockRasterIds: Number[];
        method: string;
        objectIds: Number[];
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
    export class QueryDataSource {
        constructor(json?);
        geometryType: string;
        oidFields: String[];
        query: string;
        spatialReference: SpatialReference;
        workspaceId: string;
        toJson(): Object;
    }
    export class RangeDomain {
        maxValue: number;
        minValue: number;
    }
    export class RasterDataSource {
        constructor(json?);
        dataSourceName: string;
        workspaceId: string;
        toJson(): Object;
    }
    export class RasterFunction {
        constructor();
        arguments: Object;
        functionName: void;
        variableName: string;
        toJson(): Object;
    }
    export class TableDataSource {
        constructor(json?);
        dataSourceName: string;
        gdbVersion: string;
        workspaceId: string;
        toJson(): Object;
    }
    export class TileInfo {
        constructor(properties);
        dpi: number;
        format: string;
        height: number;
        lods: LOD[];
        origin: esri.geometry.Point;
        spatialReference: SpatialReference;
        width: number;
        toJson(): Object;
    }
    export class TiledMapServiceLayer {
        attributionDataUrl: string;
        credential: Credential;
        fullExtent: esri.geometry.Extent;
        hasAttributionData: Boolean;
        id: string;
        initialExtent: esri.geometry.Extent;
        loaded: void;
        maxScale: number;
        minScale: number;
        opacity: number;
        showAttribution: Boolean;
        spatialReference: SpatialReference;
        suspended: Boolean;
        tileInfo: TileInfo;
        url: void;
        visible: Boolean;
        visibleAtMapScale: Boolean;
        getAttributionData(): dojo.Deferred;
        getTileUrl(level, row, column): string;
        hide(): void;
        isVisibleAtScale(scale): Boolean;
        refresh(): void;
        resume(): void;
        setMaxScale(scale): void;
        setMinScale(scale): void;
        setOpacity(): void;
        setScaleRange(minScale, maxScale): void;
        setVisibility(isVisible): void;
        show(): void;
        suspend(): void;
        onError(error): void;
        onLoad(layer): void;
        onOpacityChange(opacity): void;
        onResume(): void;
        onScaleRangeChange(): void;
        onScaleVisibilityChange(): void;
        onSuspend(): void;
        onUpdate(): void;
        onUpdateEnd(error): void;
        onUpdateStart(): void;
        onVisibilityChange(visbility): void;
        //error : <Error> error;
        //load : Layer;
        //opacity-change : <Number> opacity;
        //resume : void;
        //scale-range-change : void;
        //scale-visibility-change : void;
        //suspend : void;
        //update-end : <Error> error;
        //update-start : void;
        //visibility-change : <Boolean> visible;
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
        respectsDaylightSaving: Boolean;
        timeZone: string;
    }
    export class WMSLayer {
        constructor(url, options?);
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
        setImageFormat(format): void;
        setImageTransparency(transparency): void;
        setVisibleLayers(layers): void;
    }
    export class WMSLayerInfo {
        constructor(layer);
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
        constructor(options);
    }
    export class WebTiledLayer {
        constructor(urlTemplate, options);
        copyright: string;
        fullExtent: esri.geometry.Extent;
        initialExtent: esri.geometry.Extent;
        spatialReference: SpatialReference;
        tileInfo: TileInfo;
        tileServers: string[];
    }
}
declare module esri.renderer {
    // export static fromJson(): esri.symbol.Symbol; // TODO : FLE revoir les appels function statics !!!
    export class ClassBreaksRenderer {
        constructor(defaultSymbol: Object, attributeField);
        constructor(json);
        attributeField: void;
        breaks: void;
        classificationMethod: string;
        defaultSymbol: esri.symbol.Symbol;
        infos: Object[];
        normalizationField: string;
        normalizationTotal: number;
        normalizationType: string;
        addBreak(minValueOrInfo: number, maxValue: number, symbol: esri.symbol.Symbol): void;
        clearBreaks(): void;
        getSymbol(graphic): esri.symbol.Symbol;
        removeBreak(minValue, maxValue): void;
        setMaxInclusive(enable): void;
        toJson(): Object;
    }
    export class Renderer {
        defaultSymbol: esri.symbol.Symbol;
        getSymbol(graphic): esri.symbol.Symbol;
        toJson(): Object;
    }
    export class SimpleRenderer {
        constructor(defaultSymbol: esri.symbol.Symbol);
        constructor(json: Object);
        defaultSymbol: esri.symbol.Symbol;
        description: string;
        label: string;
        symbol: esri.symbol.Symbol;
        getSymbol(graphic): esri.symbol.Symbol;
        toJson(): Object;
    }
    export class SymbolAger {
        getAgedSymbol(symbol, graphic): esri.symbol.Symbol;
    }
    export class TemporalRenderer {
        constructor(observationRenderer, latestObservationRenderer?, trackRenderer?, observationAger?);
        getSymbol(graphic): esri.symbol.Symbol;
    }
    export class TimeClassBreaksAger {
        constructor(infos);
        UNIT_DAYS: string;
        UNIT_HOURS: string;
        UNIT_MILLISECONDS: string;
        UNIT_MINUTES: string;
        UNIT_MONTHS: string;
        UNIT_SECONDS: string;
        UNIT_WEEKS: string;
        UNIT_YEARS: string;
        getAgedSymbol(symbol, graphic): esri.symbol.Symbol;
    }
    export class UniqueValueRenderer {
        constructor(defaultSymbol: Object, attributeField, attributeField2?, attributeField3?, fieldDelimeter?);
        constructor(json);
        attributeField: void;
        attributeField2: string;
        attributeField3: string;
        defaultLabel: string;
        defaultSymbol: esri.symbol.Symbol;
        fieldDelimiter: string;
        infos: Object[];
        values: void;
        addValue(valueOrInfo: number, symbol: esri.symbol.Symbol): void;
        getSymbol(graphic): esri.symbol.Symbol;
        removeValue(value): void;
        toJson(): Object;
    }
    export class namespace_renderer {
        fromJson(json): Object;
    }
}
declare module esri.symbol {
    export class CartographicLineSymbol {
        constructor();
        constructor(style?, color?, width?, cap?, join?, miterLimit?);
        constructor(json);
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
        color: void;
        join: string;
        miterLimit: string;
        style: string;
        type: string;
        width: number;
        setCap(cap): CartographicLineSymbol;
        setColor(color): esri.symbol.Symbol;
        setJoin(join): CartographicLineSymbol;
        setMiterLimit(miterLimit): CartographicLineSymbol;
        setStyle(style): esri.symbol.SimpleLineSymbol;
        setWidth(width): LineSymbol;
        toJson(): Object;
    }
    export class FillSymbol {
        color: void;
        outline: esri.symbol.SimpleLineSymbol;
        type: string;
        setColor(color): esri.symbol.Symbol;
        setOutline(outline): FillSymbol;
        toJson(): Object;
    }
    export class Font {
        constructor();
        constructor(size, style, variant, weight, family);
        constructor(json);
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
    export class LineSymbol {
        color: void;
        type: string;
        width: number;
        setColor(color): esri.symbol.Symbol;
        setWidth(width): LineSymbol;
        toJson(): Object;
    }
    export class MarkerSymbol {
        angle: number;
        color: void;
        size: number;
        type: string;
        xoffset: number;
        yoffset: number;
        setAngle(angle): MarkerSymbol;
        setColor(color): esri.symbol.Symbol;
        setOffset(x, y): MarkerSymbol;
        setSize(size): MarkerSymbol;
        toJson(): Object;
    }
    export class PictureFillSymbol {
        constructor(url, outline, width, height);
        constructor(json);
        color: void;
        height: number;
        outline: esri.symbol.SimpleLineSymbol;
        type: string;
        url: string;
        width: number;
        xoffset: number;
        xscale: number;
        yoffset: number;
        yscale: number;
        setColor(color): esri.symbol.Symbol;
        setHeight(height): PictureFillSymbol;
        setOffset(x, y): PictureFillSymbol;
        setOutline(outline): FillSymbol;
        setUrl(url): PictureFillSymbol;
        setWidth(width): PictureFillSymbol;
        setXScale(scale): PictureFillSymbol;
        setYScale(scale): PictureFillSymbol;
        toJson(): Object;
    }
    export class PictureMarkerSymbol {
        constructor(url, width, height);
        constructor(json);
        angle: number;
        color: void;
        height: number;
        size: number;
        type: string;
        url: string;
        width: number;
        xoffset: number;
        yoffset: number;
        setAngle(angle): MarkerSymbol;
        setColor(color): esri.symbol.Symbol;
        setHeight(height): PictureMarkerSymbol;
        setOffset(x, y): MarkerSymbol;
        setSize(size): MarkerSymbol;
        setUrl(url): PictureMarkerSymbol;
        setWidth(width): PictureMarkerSymbol;
        toJson(): Object;
    }
    export class SimpleFillSymbol {
        constructor();
        constructor(style, outline, color);
        constructor(json);
        STYLE_SOLID: string;
        STYLE_NULL: string;
        STYLE_HORIZONTAL: string;
        STYLE_VERTICAL: string;
        STYLE_FORWARD_DIAGONAL: string;
        STYLE_BACKWARD_DIAGONAL: string;
        STYLE_CROSS: string;
        STYLE_DIAGONAL_CROSS: string;
        color: void;
        outline: esri.symbol.SimpleLineSymbol;
        style: string;
        type: string;
        setColor(color): esri.symbol.Symbol;
        setOutline(outline): FillSymbol;
        setStyle(style): SimpleFillSymbol;
        toJson(): Object;
    }
    export class SimpleLineSymbol {
        constructor();
        constructor(style, color, width);
        constructor(json);
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
        color: void;
        style: string;
        type: string;
        width: number;
        setColor(color): esri.symbol.Symbol;
        setStyle(style): esri.symbol.SimpleLineSymbol;
        setWidth(width): LineSymbol;
        toJson(): Object;
    }
    export class SimpleMarkerSymbol {
        constructor();
        constructor(style, size, outline, color);
        constructor(json);
        STYLE_CIRCLE: string;
        STYLE_SQUARE: string;
        STYLE_CROSS: string;
        STYLE_X: string;
        STYLE_DIAMOND: string;
        STYLE_PATH: string;
        angle: number;
        color: void;
        outline: esri.symbol.SimpleLineSymbol;
        size: number;
        style: string;
        type: string;
        xoffset: number;
        yoffset: number;
        setAngle(angle): MarkerSymbol;
        setColor(color): esri.symbol.Symbol;
        setOffset(x, y): MarkerSymbol;
        setOutline(outline): esri.symbol.SimpleMarkerSymbol;
        setPath(): esri.symbol.SimpleMarkerSymbol;
        setSize(size): MarkerSymbol;
        setStyle(style): esri.symbol.SimpleMarkerSymbol;
        toJson(): Object;
    }
    export class Symbol {
        color: void;
        type: string;
        setColor(color): esri.symbol.Symbol;
        toJson(): Object;
    }
    export class TextSymbol {
        constructor(text: string);
        constructor(text: string, font: string, color: string);
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
        color: void;
        decoration: string;
        font: Font;
        kerning: Boolean;
        rotated: Boolean;
        text: string;
        type: string;
        xoffset: number;
        yoffset: number;
        setAlign(align): TextSymbol;
        setAngle(angle): TextSymbol;
        setColor(color): esri.symbol.Symbol;
        setDecoration(decoration): TextSymbol;
        setFont(font): TextSymbol;
        setKerning(kerning): TextSymbol;
        setOffset(x, y): TextSymbol;
        setRotated(rotated): TextSymbol;
        setText(text): TextSymbol;
        toJson(): Object;
    }
    //export class namespace_symbol {
    //	esri.symbol.fromJson() : esri.symbol.Symbol;
    //	esri.symbol.getShapeDescriptors() : void;
    //}
}
declare module esri.tasks {
    export class AddressCandidate {
        address: Object;
        attributes: void;
        location: esri.geometry.Point;
        score: number;
    }
    export class AlgorithmicColorRamp {
        constructor();
        algorithim: string;
        fromColor: dojo.Color;
        toColor: dojo.Color;
        toJson(): Object;
    }
    export class AreasAndLengthsParameters {
        constructor();
        areaUnit: esri.tasks.GeometryService;
        calculationType: string;
        lengthUnit: esri.tasks.GeometryService;
        polygons: esri.geometry.Geometry[];
    }
    export class BufferParameters {
        constructor();
        bufferSpatialReference: SpatialReference;
        distances: Number[];
        geodesic: Boolean;
        geometries: esri.geometry.Geometry[];
        outSpatialReference: SpatialReference;
        unionResults: Boolean;
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
        accumulateAttributes: String[];
        attributeParameterValues: Object[];
        defaultCutoff: number;
        defaultTargetFacilityCount: number;
        directionsLanguage: string;
        directionsLengthUnits: string;
        directionsOutputType: string;
        directionsStyleName: string;
        directionsTimeAttribute: string;
        doNotLocateOnRestrictedElements: Boolean;
        facilities: Object;
        impedenceAttribute: string;
        incidents: Object;
        outSpatialReference: SpatialReference;
        outputGeometryPrecision: number;
        outputGeometryPrecisionUnits: string;
        outputLines: string;
        pointBarriers: void;
        polygonBarriers: void;
        polylineBarriers: void;
        restrictUTurns: string;
        restrictionAttributes: String[];
        returnDirections: Boolean;
        returnFacilities: Boolean;
        returnIncidents: Boolean;
        returnPointBarriers: Boolean;
        returnPolygonBarriers: Boolean;
        returnPolylineBarriers: Boolean;
        returnRoutes: Boolean;
        timeOfDay: Date;
        timeOfDayUsage: string;
        travelDirection: void;
        useHierarchy: Boolean;
    }
    export class ClosestFacilitySolveResult {
        directions: DirectionsFeatureSet;
        facilities: esri.geometry.Point[];
        incidents: esri.geometry.Point[];
        messages: esri.tasks.NAMessage;
        pointBarriers: esri.geometry.Point[];
        polygonBarriers: esri.geometry.Polygon[];
        polylineBarriers: esri.geometry.Polyline[];
        routes: Graphic[];
    }
    export class ClosestFacilityTask {
        constructor();
        solve(params, callback, errback): dojo.Deferred;
        onSolveComplete(closestFacilitySolveResult): void;
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
        date: Date;
        format: string;
    }
    export class DirectionsFeatureSet {
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
        distanceUnit: esri.tasks.GeometryService;
        geodesic: Boolean;
        geometry1: esri.geometry.Geometry;
        geometry2: esri.geometry.Geometry;
    }
    export class FeatureSet {
        constructor();
        constructor(json);
        displayFieldName: string;
        exceededTransferLimit: number;
        features: Graphic[];
        fieldAliases: Object;
        geometryType: string;
        spatialReference: SpatialReference;
    }
    export class FindParameters {
        constructor();
        contains: Boolean;
        dynamicLayerInfos: esri.layers.DynamicLayerInfo[];
        layerDefinitions: String[];
        layerIds: void;
        maxAllowableOffset: number;
        outSpatialReference: SpatialReference;
        returnGeometry: Boolean;
        searchFields: String[];
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
        constructor(url, options?);
        url: void;
        execute(findParameters, callback, errback): dojo.Deferred;
        onComplete(findResults): void;
        onError(error): void;
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
        deviationUnit: void;
        geometries: esri.geometry.Geometry[];
        maxDeviation: number;
    }
    export class GenerateRendererParameters {
        constructor();
        classificationDefinition: ClassificationDefinition;
        where: string;
    }
    export class GenerateRendererTask {
        constructor(url, options?);
        execute(generateRendererParameters, callback, errback): dojo.Deferred;
        onComplete(renderer): void;
        onError(error): void;
        complete: esri.renderer.Renderer;
    }
    export class GeometryService {
        constructor(url);
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
        url: void;
        areasAndLengths(areasAndLengthsParameters, callback, errback): dojo.Deferred;
        autoComplete(polygons, polylines, callback, errback): dojo.Deferred;
        buffer(bufferParameters, callback, errback): dojo.Deferred;
        convexHull(geometries, callback, errback): dojo.Deferred;
        cut(geometries, cutterGeometry, callback, errback): dojo.Deferred;
        difference(geometries, geometry, callback, errback): dojo.Deferred;
        distance(params, callback, errback): dojo.Deferred;
        generalize(params, callback, errback): dojo.Deferred;
        intersect(geometries, geometry, callback, errback): dojo.Deferred;
        labelPoints(polygons, callback, errback): dojo.Deferred;
        lengths(lengthsParameter, callback, errback): dojo.Deferred;
        offset(params, callback, errback): dojo.Deferred;
        project(params, callback, errback): dojo.Deferred;
        relation(relationParameters, callback, errback): dojo.Deferred;
        reshape(targetGeometry, reshaperGeometry, callback, errback): dojo.Deferred;
        simplify(geometries, callback, errback): dojo.Deferred;
        trimExtend(params, callback, errback): dojo.Deferred;
        union(geometries, callback, errback): dojo.Deferred;
        onAreasAndLengthsComplete(areasAndLengths): void;
        onAutoCompleteComplete(polygons): void;
        onBufferComplete(geometries): void;
        onConvexHullComplete(geometry): void;
        onCutComplete(results): void;
        onDifferenceComplete(geometries): void;
        onDistanceComplete(distance): void;
        onError(error): void;
        onGeneralizeComplete(geometries): void;
        onIntersectComplete(geometries): void;
        onLabelPointsComplete(labelPoints): void;
        onLengthsComplete(lengths): void;
        onOffsetComplete(geometries): void;
        onProjectComplete(geometries): void;
        onRelationComplete(relationships): void;
        onReshapeComplete(geometry): void;
        onSimplifyComplete(geometries): void;
        onTrimExtendComplete(geometries): void;
        onUnionComplete(geometry): void;
        //    areas-and - lengths-complete : <Object> result;
        //auto - complete-complete : esri.geometry.Polygon[];
        //convex - hull-complete : esri.geometry.Geometry;
        //		cut-complete : <Object> result;
        //		difference-complete : esri.geometry.Geometry[];
        //		distance-complete : <Number> distance;
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
        constructor(url);
        outSpatialReference: SpatialReference;
        outputSpatialReference: SpatialReference;
        processSpatialReference: SpatialReference;
        updateDelay: number;
        url: string;
        cancelJob(jobId, callback, errback): dojo.Deferred;
        cancelJobStatusUpdates(jobId): void;
        checkJobStatus(jobId, callback, errback): void;
        execute(inputParameters, callback, errback): dojo.Deferred;
        getResultData(jobId, parameterName, callback, errback): dojo.Deferred;
        getResultImage(jobId, parameterName, imageParameters, callback, errback): dojo.Deferred;
        getResultImageLayer(jobId, parameterName, imageParameters, callback, errback): void;
        setOutSpatialReference(spatialReference): void;
        setOutputSpatialReference(spatialReference): void;
        setProcessSpatialReference(spatialReference): void;
        setUpdateDelay(delay): void;
        submitJob(inputParameters, callback, statusCallback, errback): void;
        onError(error): void;
        onExecuteComplete(results, messages): void;
        onGetResultDataComplete(result): void;
        onGetResultImageComplete(mapImage): void;
        onGetResultImageLayerComplete(ArcGISDynamicMapServiceLayer): void;
        onJobCancel(status): void;
        onJobComplete(status): void;
        onStatusUpdate(status): void;
        //execute-complete : ParameterValue[]; // TODO : FLE A REVOIR
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
        layerDefinitions: String[];
        layerIds: void;
        layerOption: string;
        layerTimeOptions: esri.layers.LayerTimeOptions[];
        mapExtent: esri.geometry.Extent;
        maxAllowableOffset: number;
        returnGeometry: Boolean;
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
        constructor(url, options?);
        url: void;
        execute(identifyParameters, callback, errback): dojo.Deferred;
        onComplete(identifyResults): void;
        onError(error): void;
        complete: IdentifyResult[];
    }
    export class ImageServiceIdentifyParameters {
        constructor();
        geometry: esri.geometry.Geometry;
        mosaicRule: esri.layers.MosaicRule;
        pixelSize: esri.symbol.Symbol;
        pixelSizeX: number;
        pixelSizeY: number;
        returnGeometry: Boolean;
        timeExtent: TimeExtent;
    }
    export class ImageServiceIdentifyResult {
        catalogItemVisibilities: Number[];
        catalogItems: FeatureSet;
        location: esri.geometry.Point;
        name: string;
        objectId: number;
        properties: Object;
        value: string;
    }
    export class ImageServiceIdentifyTask {
        constructor(url);
        execute(params, callback, errback): dojo.Deferred;
        onComplete(imageServiceIdentifyResult): void;
        complete: ImageServiceIdentifyResult;
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
        subLayerIds: String[];
    }
    export class LengthsParameters {
        constructor();
        calculationType: string;
        geodesic: Boolean;
        lengthUnit: esri.tasks.GeometryService;
        polylines: esri.geometry.Geometry[];
    }
    export class LinearUnit {
        constructor();
        distance: number;
        units: string;
    }
    export class Locator {
        constructor(url);
        outSpatialReference: SpatialReference;
        url: void;
        addressToLocations(params, callback, errback): dojo.Deferred;
        addressesToLocations(params, callback, errback): dojo.Deferred;
        locationToAddress(location, distance, callback, errback): dojo.Deferred;
        setOutSpatialReference(spatialReference): void;
        onAddressToLocationsComplete(addressCandidates): void;
        onAddressesToLocationsComplete(addressCandidates): void;
        onError(error): void;
        onLocationToAddressComplete(addressCandidate): void;
        //address-to - locations-complete : AddressCandidate[]; // TODO : CSS à supprimer
        //addresses-to - locations-complete : AddressCandidate[];
        //location-to - address-complete : AddressCandidate;
    }
    export class MultipartColorRamp {
        constructor();
        colorRamps: AlgorithmicColorRamp[];
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
        offsetHow: string;
        offsetUnit: void;
    }
    export class ParameterValue {
        dataType: string;
        paramName: string;
        value: Object;
    }
    export class PrintParameters {
        constructor();
        extraParameters: Object;
        map: Map;
        outSpatialReference: SpatialReference;
        template: PrintTemplate;
    }
    export class PrintTask {
        constructor(url, params);
        url: string;
        execute(printParameters, callback, errback): dojo.Deferred;
        onComplete(result): void;
        onError(error): void;
        // complete: <String> url;
    }
    export class PrintTemplate {
        constructor();
        exportOptions: Object;
        format: string;
        label: string;
        layout: string;
        layoutOptions: Object;
        preserveScale: Boolean;
        showAttribution: Boolean;
    }
    export class ProjectParameters {
        constructor();
        geometries: esri.geometry.Geometry[];
        outSR: SpatialReference;
        transformation: Object;
        transformationForward: Boolean;
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
        groupByFieldsForStatistics: String[];
        maxAllowableOffset: number;
        objectIds: Number[];
        orderByFields: String[];
        outFields: void;
        outSpatialReference: SpatialReference;
        outStatistics: StatisticDefinition[];
        pixelSize: esri.symbol.Symbol;
        relationParam: string;
        returnGeometry: void;
        spatialRelationship: string;
        text: string;
        timeExtent: TimeExtent;
        where: string;
    }
    export class QueryTask {
        constructor(url, options?);
        url: void;
        execute(parameters, callback, errback): dojo.Deferred;
        executeForCount(query, callback, errback): dojo.Deferred;
        executeForIds(parameters, callback, errback): dojo.Deferred;
        executeRelationshipQuery(parameters, callback, errback): dojo.Deferred;
        onComplete(featureSet): void;
        onError(error): void;
        onExecuteForCountComplete(count): void;
        onExecuteForIdsComplete(featureIds): void;
        onExecuteRelationshipQueryComplete(relatedFeatureSets): void;
        //    complete: FeatureSet;
        //    execute-for-count-complete : <Number> count;
        //		execute-for-ids-complete : <Number[]> objectIds;
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
        objectIds: Number[];
        outFields: void;
        outSpatialReference: SpatialReference;
        relationshipId: number;
        returnGeometry: void;
    }
    export class RouteParameters {
        constructor();
        accumulateAttributes: String[];
        attributeParameterValues: Object[];
        barriers: Object;
        directionsLanguage: string;
        directionsLengthUnits: string;
        directionsOutputType: string;
        directionsStyleName: string;
        directionsTimeAttribute: string;
        doNotLocateOnRestrictedElements: Boolean;
        findBestSequence: Boolean;
        ignoreInvalidLocations: Boolean;
        impedanceAttribute: string;
        outSpatialReference: SpatialReference;
        outputGeometryPrecision: number;
        outputGeometryPrecisionUnits: string;
        outputLines: void;
        polygonBarriers: void;
        polylineBarriers: void;
        preserveFirstStop: Boolean;
        preserveLastStop: Boolean;
        restrictUTurns: string;
        restrictionAttributes: String[];
        returnBarriers: Boolean;
        returnDirections: void;
        returnPolygonBarriers: Boolean;
        returnPolylineBarriers: Boolean;
        returnRoutes: Boolean;
        returnStops: Boolean;
        startTime: Date;
        stops: Object;
        useHierarchy: Boolean;
        useTimeWindows: Boolean;
    }
    export class RouteResult {
        directions: DirectionsFeatureSet;
        route: Graphic;
        routeName: string;
        stops: Graphic[];
    }
    export class RouteTask {
        constructor(url);
        url: void;
        solve(params, callback, errback): dojo.Deferred;
        onError(error): void;
        onSolveComplete(solveResults): void;
        // solve-complete : <Object> result;
    }
    export class ServiceAreaParameters {
        constructor();
        accumulateAttributes: String[];
        attributeParameterValues: Object[];
        defaultBreaks: Number[];
        doNotLocateOnRestrictedElements: Boolean;
        excludeSourcesFromPolygons: String[];
        facilities: void;
        impedanceAttribute: string;
        mergeSimilarPolygonRanges: Boolean;
        outSpatialReference: esri.SpatialReference;
        outputGeometryPrecision: number;
        outputGeometryPrecisionUnits: string;
        outputLines: string;
        outputPolygons: string;
        overlapLines: Boolean;
        overlapPolygons: Boolean;
        pointBarriers: void;
        polygonBarriers: void;
        polylineBarriers: void;
        restrictUTurns: void;
        restrictionAttributes: String[];
        returnFacilities: Boolean;
        returnPointBarriers: Boolean;
        returnPolygonBarriers: Boolean;
        returnPolylineBarriers: Boolean;
        splitLinesAtBreaks: Boolean;
        splitPolygonsAtBreaks: Boolean;
        timeOfDay: Date;
        travelDirection: void;
        trimOuterPolygon: Boolean;
        trimPolygonDistance: number;
        trimPolygonDistanceUnits: void;
        useHierarchy: Boolean;
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
        solve(params, callback, errback): dojo.Deferred;
        onSolveComplete(serviceAreaSolveResult): void;
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
        constructor(map, options);
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
        respectDrawingVertexOrder: Boolean;
        activate(geometryType, options): void;
        deactivate(): void;
        finishDrawing(): void;
        setFillSymbol(fillSymbol): void;
        setLineSymbol(lineSymbol): void;
        setMarkerSymbol(markerSymbol): void;
        setRespectDrawingVertexOrder(set ): void;
        onDrawComplete(): void;
        onDrawEnd(geometry): void;
    }
    export class Edit {
        constructor(map, options?);
        EDIT_VERTICES: string;
        MOVE: string;
        SCALE: string;
        ROTATE: string;
        activate(tool, graphic, options): void;
        deactivate(): void;
        getCurrentState(): Object;
        refresh(): void;
        onActivate(tool, graphic): void;
        onDeactivate(tool, graphic, info): void;
        onGraphicClick(graphic, info): void;
        onGraphicFirstMove(graphic): void;
        onGraphicMove(graphic, transform): void;
        onGraphicMoveStart(graphic): void;
        onGraphicMoveStop(graphic, transform): void;
        onRotate(graphic, info): void;
        onRotateFirstMove(graphic): void;
        onRotateStart(graphic): void;
        onRotateStop(graphic, info): void;
        onScale(graphic, info): void;
        onScaleFirstMove(graphic): void;
        onScaleStart(graphic): void;
        onScaleStop(graphic, info): void;
        onVertexAdd(graphic, vertexInfo): void;
        onVertexClick(graphic, vertexInfo): void;
        onVertexDelete(graphic, vertexInfo): void;
        onVertexFirstMove(graphic, vertexInfo): void;
        onVertexMouseOut(graphic, vertexInfo): void;
        onVertexMouseOver(graphic, vertexInfo): void;
        onVertexMove(graphic, vertexInfo, transform): void;
        onVertexMoveStart(graphic, vertexInfo): void;
        onVertexMoveStop(graphic, vertexInfo, transform): void;
    }
    export class Navigation {
        constructor(map);
        ZOOM_IN: string;
        ZOOM_OUT: string;
        PAN: string;
        activate(navType): void;
        deactivate(): void;
        isFirstExtent(): Boolean;
        isLastExtent(): Boolean;
        setZoomSymbol(symbol): void;
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
        address: VEAddress;
        bestView: esri.geometry.Extent;
        calculationMethod: void;
        confidence: string;
        displayName: string;
        entityType: void;
        location: esri.geometry.Point;
        matchCodes: void;
    }
    export class VEGeocoder {
        constructor(options);
        culture: void;
        addressToLocations(query, callback, errback): dojo.Deferred;
        setCulture(culture): void;
        onAddressToLocationsComplete(geocodeResults): void;
        onError(error): void;
    }
    export class VETiledLayer {
        constructor(options);
        MAP_STYLE_AERIAL: string;
        MAP_STYLE_AERIAL_WITH_LABELS: string;
        MAP_STYLE_ROAD: string;
        attributionDataUrl: string;
        copyright: string;
        credential: Credential;
        culture: void;
        fullExtent: esri.geometry.Extent;
        hasAttributionData: Boolean;
        id: string;
        initialExtent: esri.geometry.Extent;
        loaded: void;
        mapStyle: string;
        maxScale: number;
        minScale: number;
        opacity: number;
        showAttribution: Boolean;
        spatialReference: SpatialReference;
        suspended: Boolean;
        tileInfo: esri.layers.TileInfo;
        url: void;
        visible: Boolean;
        visibleAtMapScale: Boolean;
        getAttributionData(): dojo.Deferred;
        getTileUrl(level, row, column): string;
        hide(): void;
        isVisibleAtScale(scale): Boolean;
        refresh(): void;
        resume(): void;
        setCulture(culture): void;
        setMapStyle(style): void;
        setMaxScale(scale): void;
        setMinScale(scale): void;
        setOpacity(): void;
        setScaleRange(minScale, maxScale): void;
        setVisibility(isVisible): void;
        show(): void;
        suspend(): void;
        onError(error): void;
        onLoad(layer): void;
        onMapStyleChange(): void;
        onOpacityChange(opacity): void;
        onResume(): void;
        onScaleRangeChange(): void;
        onScaleVisibilityChange(): void;
        onSuspend(): void;
        onUpdate(): void;
        onUpdateEnd(error): void;
        onUpdateStart(): void;
        onVisibilityChange(visbility): void;
        //    error: <Error> error;
        //    load: Layer;
        //    opacity-change : <Number> opacity;
        //resume: void;
        //scale - range-change : void;
        //scale - visibility-change : void;
        //suspend: void;
        //	update-end : <Error> error;
        //	update-start : void;
        //	visibility-change : <Boolean> visible;
    }
}
// TODO : FLE A REVOIR
//declare module esri {
//    export class namespace_esri {
//        config: void;
//        documentBox: Object;
//        version: number;
//		esri.addProxyRule(rule): number;
//		esri.filter(object, callback, thisObject): Object;
//		esri.getGeometries(graphics): esri.geometry.Geometry[];
//		esri.getProxyRule(): Object;
//		esri.graphicsExtent(graphics): esri.geometry.Extent;
//		esri.hide(element): void;
//		esri.isDefined(value): Boolean;
//		esri.request(request, options): dojo.Deferred;
//		esri.setRequestPreCallback(callbackFunction): void;
//		esri.show(element): void;
//		esri.substitute(data, template, first): void;
//		esri.toggle(element): void;
//		esri.urlToObject(url): Object;
//		esri.valueOf(array, value): Object;
//    }
//}