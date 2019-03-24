<?php

namespace App\Http\Controllers\API\Category;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\Collections\CategoryCollection;
use App\Category\Category;
use Illuminate\Support\Facades\DB;
use App\Product;
use App\Inventory;
use App\Http\Resources\ProductCollection;
use App\Http\Resources\Product\ProductResource;
use App\Http\Resources\Collections\InventoryCollection;

class CategoryController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //return CategoryCollection::collection(Category::all()) ;

        $categories = Category::where('parent_id', '=', 0)->get();

        $allCategories = Category::all();
        //$allCategories = Category::pluck('name','id')->all();

        $allCatWthChild = Category::parent(0)->renderAsArray();

        return response()->json(['cat' => $categories,'wthChild' => $allCatWthChild, 'allCat' => $allCategories, 'cate' => 'category']);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        \Log::info($request->all());

        //return response()->json(['new_category' => $request->all(), 'success' => 'New Category added successfully.']);

        DB::statement('SET FOREIGN_KEY_CHECKS = 0');

        $this->validate($request, [

        		'name' => 'required',

                ]);

        //$input = $request->all();

        $category = new Category;

        $category->name = $request->name ;

        $category->slug = $request->slug ;

        $category->parent_id = empty($request->parent_id)  ? 0 : $request->parent_id;

        $category->description = empty($request->description)  ? null : $request->parent_id;

        $category->save();

        //return response()->json(['cat' => $input, 'success' => 'New Category added successfully.']);

        //$input['parent_id'] = empty($input['parent_id']) ? 0 : $input['parent_id'];

        //Category::create($input);

        return response()->json(['new_category' => $category, 'success' => 'New Category added successfully.']);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //return Category::findOrFail($id);

        $child = Category::parent($id)->renderAsArray();


        if($id != 0) {

            $parent = Category::findOrFail($id);

            $parent = ProductCollection::collection($parent->inventories());

            dd($parent);

        }

        if($id == 0) {

            $parent = ['name' => 'Categories'];
        }


        return response()->json(['child' => $child, 'parent' => $parent, 'products' => '$products'], 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function getChildren(Request $request)
    {
        $categories = Category::where('parent_id', '=', $request->parent_id)->get();

        return response()->json(['children' => $request->all(), 'chld' => $categories]);
    }

    public function getProducts(Request $request)
    {
        $id = $request->id;

        //$parent = DB::table('inventory_storeview')->where('category_id', '=', $id)->get() ;

        return response()->json(['children' => $request->all(), 'parent' => $parent]);


        //$parent = InventoryCollection::collection($parent->inventories);
        //$parent = $parent->get();

        //dd($parent);

    }
}
