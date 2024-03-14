<?php

namespace App\Http\Controllers;

use App\Http\Resources\AnnouncementCollection;
use App\Http\Resources\AnnouncementResource;
use App\Models\Announcement;
use Illuminate\Http\Request;

class AnnouncementController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return new AnnouncementCollection(Announcement::all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        return Announcement::create($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(Announcement $announcement)
    {
        return new AnnouncementResource($announcement);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Announcement $announcement)
    {
        $announcement->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Announcement $announcement)
    {
        $announcement->delete();
    }
}
