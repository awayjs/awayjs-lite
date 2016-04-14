import * as attributes				from "./lib/attributes";
import * as base					from "./lib/base";
import * as controllers				from "./lib/controllers";
import * as display					from "./lib/display";
import * as errors					from "./lib/errors";
import * as events					from "./lib/events";
import * as geom					from "./lib/geom";
import * as graphics				from "./lib/graphics";
import * as image					from "./lib/image";
import * as library					from "./lib/library";
import * as materials				from "./lib/materials";
import * as net						from "./lib/net";
import * as parsers					from "./lib/parsers";
import * as partition				from "./lib/partition";
import * as prefabs					from "./lib/prefabs";
import * as projections				from "./lib/projections";
import * as textures				from "./lib/textures";
import * as ui						from "./lib/ui";
import * as utils					from "./lib/utils";

import {default as GL_AttributesBuffer}				from "awayjs-stagegl/lib/attributes/GL_AttributesBuffer";
import {default as GL_BitmapImage2D}				from "awayjs-stagegl/lib/image/GL_BitmapImage2D";
import {default as GL_BitmapImageCube}				from "awayjs-stagegl/lib/image/GL_BitmapImageCube";
import {default as GL_RenderImage2D}				from "awayjs-stagegl/lib/image/GL_RenderImage2D";
import {default as GL_RenderImageCube}				from "awayjs-stagegl/lib/image/GL_RenderImageCube";
import {default as GL_Sampler2D}					from "awayjs-stagegl/lib/image/GL_Sampler2D";
import {default as GL_SamplerCube}					from "awayjs-stagegl/lib/image/GL_SamplerCube";

import {default as CameraNode}						from "awayjs-display/lib/partition/CameraNode";
import {default as EntityNode}						from "awayjs-display/lib/partition/EntityNode";
import {default as SkyboxNode}						from "awayjs-display/lib/partition/SkyboxNode";

import View											from "awayjs-display/lib/View";

import {default as ElementsPool}					from "awayjs-renderergl/lib/elements/ElementsPool";
import {default as GL_LineElements}					from "awayjs-renderergl/lib/elements/GL_LineElements";
import {default as GL_TriangleElements}				from "awayjs-renderergl/lib/elements/GL_TriangleElements";

import {default as GL_BillboardRenderable}			from "awayjs-renderergl/lib/renderables/GL_BillboardRenderable";
import {default as GL_GraphicRenderable}			from "awayjs-renderergl/lib/renderables/GL_GraphicRenderable";
import {default as GL_LineSegmentRenderable}		from "awayjs-renderergl/lib/renderables/GL_LineSegmentRenderable";
import {default as GL_SkyboxRenderable}				from "awayjs-renderergl/lib/renderables/GL_SkyboxRenderable";

import {default as ShaderBase}						from "awayjs-renderergl/lib/shaders/ShaderBase";

import {default as GL_BasicMaterialSurface}			from "awayjs-renderergl/lib/surfaces/GL_BasicMaterialSurface";
import {default as GL_SkyboxSurface}				from "awayjs-renderergl/lib/surfaces/GL_SkyboxSurface";
import {default as SurfacePool}						from "awayjs-renderergl/lib/surfaces/SurfacePool";

import {default as GL_Single2DTexture}				from "awayjs-renderergl/lib/textures/GL_Single2DTexture";
import {default as GL_SingleCubeTexture}			from "awayjs-renderergl/lib/textures/GL_SingleCubeTexture";

import DefaultRenderer								from "awayjs-renderergl/lib/DefaultRenderer";
import RendererBase									from "awayjs-renderergl/lib/RendererBase";


library.Loader.enableParser(parsers.Image2DParser);
library.Loader.enableParser(parsers.ImageCubeParser);
library.Loader.enableParser(parsers.TextureAtlasParser);

partition.PartitionBase.registerAbstraction(CameraNode, display.Camera);
partition.PartitionBase.registerAbstraction(EntityNode, display.Sprite);
partition.PartitionBase.registerAbstraction(EntityNode, display.Shape);
partition.PartitionBase.registerAbstraction(EntityNode, display.Billboard);
partition.PartitionBase.registerAbstraction(EntityNode, display.LineSegment);
partition.PartitionBase.registerAbstraction(EntityNode, display.TextField);
partition.PartitionBase.registerAbstraction(SkyboxNode, display.Skybox);

base.Stage.registerAbstraction(GL_AttributesBuffer, attributes.AttributesBuffer);
base.Stage.registerAbstraction(GL_RenderImage2D, image.Image2D);
base.Stage.registerAbstraction(GL_RenderImageCube, image.ImageCube);
base.Stage.registerAbstraction(GL_BitmapImage2D, image.BitmapImage2D);
base.Stage.registerAbstraction(GL_BitmapImageCube, image.BitmapImageCube);
base.Stage.registerAbstraction(GL_BitmapImage2D, image.SpecularImage2D);
base.Stage.registerAbstraction(GL_Sampler2D, image.Sampler2D);
base.Stage.registerAbstraction(GL_SamplerCube, image.SamplerCube);

SurfacePool.registerAbstraction(GL_BasicMaterialSurface, materials.BasicMaterial);
SurfacePool.registerAbstraction(GL_SkyboxSurface, display.Skybox);

ElementsPool.registerAbstraction(GL_LineElements, graphics.LineElements);
ElementsPool.registerAbstraction(GL_TriangleElements, graphics.TriangleElements);

ShaderBase.registerAbstraction(GL_Single2DTexture, textures.Single2DTexture);
ShaderBase.registerAbstraction(GL_SingleCubeTexture, textures.SingleCubeTexture);

RendererBase.registerAbstraction(GL_BillboardRenderable, display.Billboard);
RendererBase.registerAbstraction(GL_LineSegmentRenderable, display.LineSegment);
RendererBase.registerAbstraction(GL_GraphicRenderable, graphics.Graphic);
RendererBase.registerAbstraction(GL_SkyboxRenderable, display.Skybox);

export {
	attributes,
	base,
	controllers,
	display,
	errors,
	events,
	geom,
	graphics,
	image,
	library,
	materials,
	net,
	parsers,
	partition,
	prefabs,
	projections,
	textures,
	ui,
	utils,
	DefaultRenderer,
	View
}